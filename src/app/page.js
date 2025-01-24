import { ClientPageRoot } from "next/dist/client/components/client-page";
import Posts from "./posts/page";


export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json()
  // console.log(data)

  return (
    <div>
       <Posts posts={data}/>
    </div>
  );
}
