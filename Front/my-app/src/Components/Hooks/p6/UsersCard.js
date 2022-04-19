import React from "react";


function UsersCard ( props ) {
    let {name, username, email} = props;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="title">{name}</h5>
                <p className="email">{username}</p>
                <p className="body">{email}</p>
            </div>
        </div>
    )
}

export default UsersCard;