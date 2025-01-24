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
    <div>
      <div className=" bg-base-100 flex gap-3  justify-center text-2xl font-semibold py-10 items-center">
        <p className="">
          <Link href="/">Home</Link>
        </p>

        {user ? (
          <>
            {" "}
            <p>
              <Link href="/profile">Profile</Link>
            </p>
            <LogoutLink className="btn btn-accent">Log out</LogoutLink>
          </>
        ) : (
          <>
            <LoginLink
              className="btn btn-accent"
              postLoginRedirectURL="/profile"
            >
              Sign in
            </LoginLink>
            <RegisterLink
              postLoginRedirectURL="/profile"
              className="btn btn-accent"
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
