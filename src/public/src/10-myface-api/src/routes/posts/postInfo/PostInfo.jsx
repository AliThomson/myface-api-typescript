import React from "react";

export function PostInfo( {post }) {
    return (
        <div className="post-info">
            <p>Posted by {post.postedBy.name} on {post.createdAt}</p>
            <p>Likes: {post.likedBy.length}, Dislikes: {post.dislikedBy.length}</p>
        </div>
    )
}