"use client";
import Link from "next/link";
import React from "react";

const Posts = ({ posts }) => {
  //   console.log(posts);
  if (!Array.isArray(posts)) {
    return <h2 className="text-red-500">No posts available</h2>;
  }
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-3 py-10 md:mx-20 rounded-md
    "
    >
      {posts?.map((post, i) => (
        <div key={i} className=" bg-white shadow-xl rounded-md">
          <div className="p-2 md:p-9 space-y-6 ">
            <div className="space-y-6 flex flex-col justify-between h-full">
              <Link href={`/post/${post.id}`} className="text-lg md:text-2xl font-bold hover:underline">{post.title}</Link>
              <p className="text-sm md:text-lg">{post.body}</p>
            </div>
            {/* <div className="">
              <Link  className="btn btn-outline btn-sm text-[#09122C]">
                Details
              </Link>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
