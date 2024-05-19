// "use server";
// import { cookies } from "next/headers";
// import {
//   ILoginController,
//   ILoginControllerResponse,
// } from "@src/types/lib/login-handler";
// import { searchIndividualUserByEmail } from "../user-handler";
// import { redirect } from "next/navigation";
// import { EAuth } from "@src/types/common";

// export async function LoginController({
//   email,
//   password,
// }: ILoginController): Promise<void> {
//   let redirectPath = "";
//   const cookieStore = cookies();
//   try {
//     const {
//       payload: { user },
//     } = await searchIndividualUserByEmail(email);
//     if (user && user.password == password) {
//       //here jwt token will be store in the cookie (TO DO)
//       cookieStore.set(EAuth.AuthTokenCookieName, user.email);
//       redirectPath = "/dashboard/profile";
//     } else {
//       redirectPath = "/";
//     }
//   } catch (err) {
//     redirectPath = "/";
//     console.log(err);
//   } finally {
//     if (redirectPath) {
//       redirect(redirectPath);
//     } else {
//       redirect("/");
//     }
//   }
// }

// export async function logoutController() {
//   const cookieStore = cookies();
//   let redirectUrl: string = "";
//   try {
//     cookieStore.delete(EAuth.AuthTokenCookieName);
//     redirectUrl = "/login";
//   } catch (err) {
//     redirectUrl = "/";
//   } finally {
//     if (redirectUrl) {
//       redirect(redirectUrl);
//     } else {
//       redirect("/");
//     }
//   }
// }

"use server";
import { cookies } from "next/headers";
import { ILoginController } from "@src/types/lib/login-handler";

import { redirect } from "next/navigation";
import { EAuth } from "@src/types/common";

export async function LoginController({
  email,
  password,
}: ILoginController): Promise<void> {
  let redirectPath = "";
  const cookieStore = cookies();
  try {
    const res = await fetch(`${process.env.SERVER_BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
    });

    if (!res.ok) {
      console.log(`error given`);
      redirectPath = "/";
    }
    const { token } = await res.json();
    if (token) {
      cookieStore.set("auth", token);
      redirectPath = "/dashboard/profile";
    } else {
      redirectPath = "/";
    }
  } catch (err) {
    redirectPath = "/";
    console.log(err);
  } finally {
    console.log(redirectPath);
    if (redirectPath) {
      redirect(redirectPath);
    } else {
      redirect("/");
    }
  }
}

export async function logoutController() {
  const cookieStore = cookies();
  let redirectUrl: string = "";
  try {
    cookieStore.delete(EAuth.AuthTokenCookieName);
    redirectUrl = "/login";
  } catch (err) {
    redirectUrl = "/";
  } finally {
    if (redirectUrl) {
      redirect(redirectUrl);
    } else {
      redirect("/");
    }
  }
}
