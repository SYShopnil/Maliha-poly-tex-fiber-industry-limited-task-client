import { cookies } from "next/headers";

import { IGetLoggedInUserResponse } from "@src/types/lib/user-handler";

export async function getLoggedInUser(): Promise<IGetLoggedInUserResponse> {
  try {
    const cookiesStore = cookies();
    const getAuthToken = cookiesStore.get("auth"); //this toke should be a decrypted jwt token
    const autToken = getAuthToken?.value && getAuthToken.value;
    const res = await fetch(`${process.env.SERVER_BASE_URL}/auth/session`, {
      method: "GET",
      credentials: "include",
      headers: {
        "content-type": "application/json",
        Authorization: `${autToken}`, // Set the JWT token in the Authorization header
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
