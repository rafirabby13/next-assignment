"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  console.log(post)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setPost(res);
      });

    // const data =  res.json()
    // console.log(data)
  }, []);
  return (
    <div>
      <div  className=" bg-[#E1EACD] text-[#09122C] max-w-3xl mx-auto shadow-xl my-20 ">
        <div className="space-y-4 p-10">
          <h2 className="text-4xl font-bold">{post.title}</h2>
          <p className="text-xl">{post.body}</p>
          <div className=" ">
            <Link href="/" className="btn btn-outline text-2xl px-20 text-[#09122C]">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
