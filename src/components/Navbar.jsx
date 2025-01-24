import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = () => {
  return (
    <div>
      <div className=" bg-base-100 flex gap-3  justify-center text-2xl font-semibold py-10">
        <p className="">
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="/profile">Profile</Link>
        </p>
        <LoginLink className="btn btn-accent" postLoginRedirectURL="/profile">
          Sign in
        </LoginLink>
        <RegisterLink
          postLoginRedirectURL="/profile"
          className="btn btn-accent"
        >
          Sign up
        </RegisterLink>
      </div>
    </div>
  );
};

export default Navbar;
