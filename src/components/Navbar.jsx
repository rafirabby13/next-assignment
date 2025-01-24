"use server";
import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser, isLoading } = getKindeServerSession();
  if (isLoading) {
    return "laoding......";
  }
  const user = await getUser();

  console.log(user);
  return (
    <div className="bg-[#09122C]">
      <div className="  flex gap-3 md:gap-6  justify-center text-2xl font-semibold py-10 items-center text-[#FFF6DA]">
        <p className="">
          <Link href="/">Home</Link>
        </p>
        <p>
              <Link href="/profile">Profile</Link>
            </p>

        {user ? (
          <>
            {" "}
            
            <LogoutLink className="btn btn-outline btn-sm text-[#FFF6DA]">Log out</LogoutLink>
          </>
        ) : (
          <>
            <LoginLink
              className="btn btn-outline btn-sm text-[#FFF6DA]"
              postLoginRedirectURL="/profile"
            >
              Sign in
            </LoginLink>
            <RegisterLink
              postLoginRedirectURL="/profile"
              className="btn btn-outline btn-sm text-[#FFF6DA]"
            >
              Sign up
            </RegisterLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
