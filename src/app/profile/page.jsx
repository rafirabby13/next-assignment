"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

import React from "react";

const page = () => {
      const { isAuthenticated, isLoading } = useKindeBrowserClient();
      if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {
        isAuthenticated ? <div className="text-4xl text-center font-semibold border-2 p-4 shadow-2xl">
        "Welcome to your profile!"
      </div>:
      <div className="text-4xl text-center">
      You have to <LoginLink className="btn btn-accent">Login</LoginLink> to see this page
    </div>
      }
    </div>
  );
};

export default page;
