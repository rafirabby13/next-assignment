import { ClientPageRoot } from "next/dist/client/components/client-page";
import Posts from "./posts/page";


export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // if(!response.ok){
  //   throw new Error('no data')
  // }

  const data = await res.json()
  // console.log(data)

  return (
    <div>
       <Posts posts={data}/>
    </div>
  );
}
