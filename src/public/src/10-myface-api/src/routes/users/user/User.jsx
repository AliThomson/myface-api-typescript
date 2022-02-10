import React from "react";
import { Link } from "react-router-dom";
import './user.scss';

export function User( {user }) {
    return (
        <div className="user">
            <img className="cover-image"
                src={user.coverImageUrl}
                alt={user.name}
                // width="400"
                // height="400"
                />
            <Link className="user-name" to={`/users/${user.id}`}>
                <h2>{user.name}</h2>
                </Link>
            <img className="user-image"
                src={user.profileImageUrl}
                alt={user.name}
                />
            <div className="user-info">
                <p>{user.email}</p>

                {user.likes !== undefined
                    ? <p> Liked: {user.likes.length} </p>
                    : <p></p>}

                {user.dislikes !== undefined
                    ? <p> Disliked: {user.dislikes.length} </p>
                    : <p></p>}
            </div>
            
        </div>
    )
}