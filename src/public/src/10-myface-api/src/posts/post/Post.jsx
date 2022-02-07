import React from "react";

export function Post( {post }) {
    return (
        <div className="post">
            <h2>{post.message}</h2>
            <img
                src={post.imageUrl}
                alt={post.message}
                />
        </div>
    )
}