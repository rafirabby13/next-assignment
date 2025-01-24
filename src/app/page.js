"use server";

import Posts from "./posts/page";


export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json()
  // console.log(data)

  return (
    <div className="bg-[#d0ddd01f]">
       <Posts posts={data}/>
    </div>
  );
}
