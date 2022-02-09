import React from "react";
import { Link } from "react-router-dom";
import './user.scss';

export function User( {user }) {
    return (
        <div className="user">
            <img className="cover-image"
                src={user.coverImageUrl}
                alt={user.name}
                width="400"
                height="400"
                />
            <Link to={`/users/${user.id}`}>
                <h2>{user.name}</h2>
                </Link>
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