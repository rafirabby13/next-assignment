"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
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
      <div className="card-body max-w-lg mx-auto">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.body}</p>
        <div className="card-actions justify-end">
          <Link href='/' className="btn btn-primary">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
