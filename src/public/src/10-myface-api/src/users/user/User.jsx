import React from "react";
import './user.css';

export function User( {user }) {
    return (
        <div className="user">
            <img className="cover-image"
                src={user.coverImageUrl}
                alt={user.name}
                width="400"
                height="400"
                />
            <h2>{user.name}</h2>
            <img className="profile-image"
                src={user.profileImageUrl}
                alt={user.name}
                />
            <p>{user.email}</p>
            <p>Liked: {user.likes.length}</p>
            <p>Disliked: {user.dislikes.length}</p>
            
        </div>
    )
}