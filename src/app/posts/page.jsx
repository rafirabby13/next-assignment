import Link from "next/link";
import React from "react";

const Posts = ({ posts }) => {
//   console.log(posts);
if (!Array.isArray(posts)) {
  return <h2 className="text-red-500">No posts available</h2>;
}
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3
    ">
      {
        posts?.map((post,i)=><div key={i}  className=" bg-base-100 shadow-xl">
            <div className="p-3 space-y-4">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p>{post.body}</p>
              <div className="">
                <Link href={`/post/${post.id}`} className="btn btn-primary">Details</Link>
              </div>
            </div>
          </div>)
      }
    </div>
  );
};

export default Posts;
