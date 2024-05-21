import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

const authProtectedRoute = [
  "/dashboard",
  "/dashboard/profile",
  "/dashboard/text-box",
];
const afterAuthProtectedRoute = ["/login"];
export function middleware(request: NextRequest) {
  const cookiesStore = cookies();
  let sessionStatus = false;
  const authToken = cookiesStore.get("auth");
  if (authToken) {
    sessionStatus = true;
  }
  if (!sessionStatus && authProtectedRoute.includes(request.nextUrl.pathname)) {
    const absoluteURL = new URL("/login", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  if (
    sessionStatus &&
    afterAuthProtectedRoute.includes(request.nextUrl.pathname)
  ) {
    const absoluteURL = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
