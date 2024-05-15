import { cookies } from "next/headers";
import { promises as fs } from "fs";
import { IUser } from "@src/types/db/user";
import {
  IGetLoggedInUserResponse,
  ISearchIndividualUserByEmailReturn,
} from "@src/types/lib/user-handler";

export async function searchIndividualUserByEmail(
  email: string
): Promise<ISearchIndividualUserByEmailReturn> {
  return new Promise(async (resolve) => {
    const getAllUserFromJsonDB = await getAllUsers();
    if (getAllUserFromJsonDB) {
      const getUserQueryByEmail = getAllUserFromJsonDB.find((user) => {
        return user.email == email;
      });
      if (getUserQueryByEmail) {
        resolve({
          message: "",
          status: 202,
          payload: {
            user: getUserQueryByEmail,
          },
        });
      } else {
        resolve({
          message: "",
          status: 404,
          payload: {
            user: null,
          },
        });
      }
    } else {
      resolve({
        message: "",
        status: 404,
        payload: {
          user: null,
        },
      });
    }
  });
}

export async function getLoggedInUser(): Promise<IGetLoggedInUserResponse> {
  try {
    const cookiesStore = cookies();
    const getAuthToken = cookiesStore.get("auth"); //this toke should be a decrypted jwt token
    const res = await fetch(`${process.env.SERVER_BASE_URL}/auth/session`, {
      method: "GET",
      credentials: "include",
      headers: {
        "content-type": "application/json",
        Authorization: `${getAuthToken?.value}`, // Set the JWT token in the Authorization header
      },
    });
    if (!res.ok) {
      return {
        message: "Somethings went wrong",
        payload: {
          isLoggedIn: false,
          loggedInUser: null,
        },
        status: 501,
      };
    }
    const { message, status, user, isAuth } = await res.json();
    return {
      message,
      status,
      payload: {
        isLoggedIn: isAuth,
        loggedInUser: user,
      },
    };
  } catch (err) {
    return {
      message: "Some things went wrong",
      status: 404,
      payload: {
        isLoggedIn: false,
        loggedInUser: null,
      },
    };
  }
}

export async function getAllUsers(): Promise<IUser[] | null> {
  return new Promise(async (resolve) => {
    const parseUserFromJsonDB: IUser[] = JSON.parse(
      await fs.readFile(
        process.cwd() + "/public/static/db/user.db.json",
        "utf8"
      )
    );
    if (parseUserFromJsonDB) {
      resolve(parseUserFromJsonDB);
    } else {
      resolve(null);
    }
  });
}
