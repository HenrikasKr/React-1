import React from "react";
import CommentsCard from "./CommentsCard";

function CommentsList( props ) {
    let {data:post} = props;
    
    let list = post.map ( post => {
        return <CommentsCard key={post.id} id={post.id} name={post.name} email={post.email} body={post.body}/>
    })
    return (
      <div className="row">{list}</div>
      
    )
  }
  export default CommentsList;