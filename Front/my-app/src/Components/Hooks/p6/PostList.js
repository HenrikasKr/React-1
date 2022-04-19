import React from "react";
import PostCard from "./PostCard";

function PostsList( props ) {
    let {data:post} = props;
    
    let list = post.map ( post => {
        return <PostCard key={post.id} title={post.title} body={post.body}/>
    })
    return (
        <div className="row">{list}</div>
      
    )
  }
  export default PostsList