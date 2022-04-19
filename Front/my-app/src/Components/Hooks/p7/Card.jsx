import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardp7.css'

function Card({ login, nodeID, avatarUrl}) {
  return (
    <>
        <div className='cardp7'>
            <img
                src={avatarUrl}
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                aria-label="Placeholder: 140x140"
                focusable="false"
            />
            <h2>Login: {login}</h2>
            <p>Node ID: {nodeID}</p>
            <p>

                <Link to={`/Hooks/profile/${login}`}>

                <button className="btn btn-secondary">View details &raquo;</button>

                </Link>

            </p>
        </div>    
    </>
  );
}

export default Card