"use server";

import { demoData } from "@src/components/compound/s-show-all-texts-boxs/config";
import {
  ITextBoxData,
  ITextDataElements,
} from "@src/types/compound/s-show-all-texts-boxs-type";
import { redirect } from "next/navigation";

export async function addNewTextListServerAction(
  elements: ITextDataElements[]
) {
  const redirectPath = "";
  try {
    console.log(elements);
  } catch (err) {
    console.log(err);
  } finally {
    if (redirectPath) {
    } else {
      redirect("/");
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
