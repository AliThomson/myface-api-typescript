import React from "react";
import { Link } from "react-router-dom";
import './user.scss';

export function User( {user }) {
    const likes = (user.likes !== undefined)
        ? `Liked: ${user.likes.length}`
        : "";
        
    const dislikes = (user.dislikes !== undefined)
        ? `Disliked: ${user.dislikes.length}`
        : "";
    


    return (
        <div className="user">
            <img className="cover-image"
                src={user.coverImageUrl}
                alt={user.name}
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
                <p>{likes} {dislikes}</p>

                {/* {user.likes !== undefined
                    ? <p> Liked: {user.likes.length} </p>
                    : <p></p>}

                {user.dislikes !== undefined
                    ? <p> Disliked: {user.dislikes.length} </p>
                    : <p></p>} */}
            </div>
            
        </div>
    )
}