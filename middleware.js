"use server";
import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(request) {

const { isAuthenticated , isLoading} = getKindeServerSession();
if (isLoading) {
   return console.log('Loading authentication...');
      
  }
    const isLoggedIn = await isAuthenticated()
    console.log(isLoggedIn)
    if (!isLoggedIn) {
        return NextResponse.redirect(new URL("/", request.url));
    }


  return NextResponse.next();
}
export const config = {
  matcher: "/profile",
};
