import Link from "next/link";
import React from "react";

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
      </div>
    </div>
  );
};

export default Navbar;
