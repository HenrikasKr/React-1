import React, { useState, useEffect } from "react";
import PostsList from "./PostList";
import CommentsList from "./CommentsList";
import UsersList from "./UsersList";

function PageData() {
  const [type, setType] = useState("posts");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((arr) => {
        console.log(arr);
        setData(arr);
      });
  }, [type]);
  return (
      <>
        <div>
            <button onClick={() => setType("posts")}>posts</button>
            <button onClick={() => setType("users")}>users</button>
            <button onClick={() => setType("comments")}>comments</button>
        </div>
        <div>
            {type == "posts" ? <PostsList data={data} /> : type == "comments" ? <CommentsList  data={data}/> : <UsersList  data={data}/>}
        </div>
      </>
  );
}
export default PageData;