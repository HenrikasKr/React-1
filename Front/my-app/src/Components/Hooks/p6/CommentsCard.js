import React from "react";


function CommentsCard ( props ) {
    let {name, email, body} = props;
    return (
        <div className="container">
            <div className="col-4 border border-secondary">
                    <h5 className="title text-danger">{name}</h5>
                    <p className="email">{email}</p>
                    <p className="body">{body}</p>
            </div>
        </div>
    )
}

export default CommentsCard;