import React from "react";
import UsersCard from "./UsersCard";

function UsersList( props ) {
    let {data:post} = props;
    
    let list = post.map ( post => {
        return <UsersCard key={post.id} id={post.id} name={post.name} username={post.username} email={post.email} address={post.address}/>
    })
    return (
        <div className="row">{list}</div>
      
    )
  }
  export default UsersList;