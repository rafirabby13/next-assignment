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
      <div  className=" bg-base-100 max-w-xl mx-auto shadow-xl">
        <div className="p-3 space-y-4">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p>{post.body}</p>
          <div className="card-actions justify-end">
            <Link href="/" className="btn btn-primary">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
