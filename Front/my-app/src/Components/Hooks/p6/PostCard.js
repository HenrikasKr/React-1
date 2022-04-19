import React from "react";


function PostCard ( props ) {
    let {title, body} = props;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="title">{title}</h5>
                <p className="body">{body}</p>
            </div>
        </div>
    )
}

export default PostCard;