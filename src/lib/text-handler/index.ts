"use server";

import { demoData } from "@src/components/compound/s-show-all-texts-boxs/config";
import {
  ITextBoxData,
  ITextDataElements,
} from "@src/types/compound/s-show-all-texts-boxs-type";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function addNewTextListServerAction(
  elements: ITextDataElements[]
) {
  let redirectPath = "";
  try {
    const cookiesStore = cookies();
    const getAuthToken = cookiesStore.get("auth"); //this toke should be a decrypted jwt token
    const autToken = getAuthToken?.value && getAuthToken.value;
    const res = await fetch(`${process.env.SERVER_BASE_URL}/text/add`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ payload: elements }),
      headers: {
        "content-type": "application/json",
        Authorization: `${autToken}`, // Set the JWT token in the Authorization header
      },
    });
    if (!res.ok) {
      console.log(`error given`);
      return {
        message: "Fetch Error",
        payload: null,
      };
    }
    const { status } = await res.json();
    if (status == 201) {
      redirectPath = "/dashboard/text-box";
    } else {
      return {
        message: "Text Creation Failed",
        payload: null,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      message: "Internal Error",
      payload: null,
    };
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
}

export async function updateTextListOfLoggedInUserServerAction(
  elements: ITextDataElements[],
  textId: string
) {
  let redirectPath = "";
  let positiveMessage = "";
  try {
    const cookiesStore = cookies();
    const getAuthToken = cookiesStore.get("auth"); //this toke should be a decrypted jwt token
    const autToken = getAuthToken?.value && getAuthToken.value;
    const res = await fetch(
      `${process.env.SERVER_BASE_URL}/text/element/update`,
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ textId, payload: elements }),
        headers: {
          "content-type": "application/json",
          Authorization: `${autToken}`, // Set the JWT token in the Authorization header
        },
      }
    );
    if (!res.ok) {
      console.log(`error given`);
      return {
        message: "Fetch Error",
        status: 401,
      };
    }
    const { status, message: responseMessage } = await res.json();

    if (status == 202) {
      //all done successfully
      redirectPath = "/dashboard/text-box";
      positiveMessage = responseMessage;
      return {
        message: responseMessage,
        status: 202,
        modalClose: () => {},
      };
    } else {
      return {
        message: responseMessage,
        status,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      message: "Internal error",
      status: 501,
    };
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
}

interface IGetAllLoggedInUserTextListFromServerResponse {
  status: number;
  message: string;
  payload: ITextBoxData[];
}

export async function getAllLoggedInUserTextListFromServer(): Promise<IGetAllLoggedInUserTextListFromServerResponse> {
  try {
    const cookiesStore = cookies();
    const getAuthToken = cookiesStore.get("auth"); //this toke should be a decrypted jwt token
    const autToken = getAuthToken?.value && getAuthToken.value;

    const res = await fetch(`${process.env.SERVER_BASE_URL}/text/get/all`, {
      method: "GET",
      credentials: "include",
      headers: {
        "content-type": "application/json",
        Authorization: `${autToken}`, // Set the JWT token in the Authorization header
      },
    });
    if (!res.ok) {
      console.log(`error given`);
      return {
        message: "Fetch Error",
        status: 202,
        payload: [],
      };
    }
    const { message, payload, status } = await res.json();
    if (status == 200) {
      return {
        message,
        status: 200,
        payload,
      };
    } else {
      return {
        message,
        status: 404,
        payload: [],
      };
    }
  } catch (err) {
    console.log(err);
    return {
      message: "Some internal error",
      status: 501,
      payload: [],
    };
  }
}
