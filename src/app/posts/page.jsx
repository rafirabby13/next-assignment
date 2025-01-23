import React from "react";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
      {
        posts.map((post,i)=><div key={i}  className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.body}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>)
      }
    </div>
  );
};

export default Posts;
