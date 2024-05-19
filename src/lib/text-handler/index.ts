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
      body: JSON.stringify(elements),
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
      redirect = "/dashboard/text-box"
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
    }
  }
}

export async function updateTextListOfLoggedInUserServerAction(
  elements: ITextDataElements[]
) {
  try {
    console.log(elements);
  } catch (err) {
  } finally {
  }
}

interface IGetAllLoggedInUserTextListFromServerResponse {
  status: number;
  message: string;
  payload: ITextBoxData[];
}

export async function getAllLoggedInUserTextListFromServer(): Promise<IGetAllLoggedInUserTextListFromServerResponse> {
  try {
    const fetchedTextData: ITextBoxData[] = demoData;
    return {
      message: "Test Running",
      status: 202,
      payload: fetchedTextData,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "Some internal error",
      status: 501,
      payload: [],
    };
  }
}
