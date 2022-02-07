import React from "react";
import { Post } from "../../posts/post/Post";

export function UserPosts( { postList }) {
    return (
        <div className="users-posts">
            <h2 className="users-posts">User's Posts</h2>
            <ol className="postList">
                {postList.map((post, index) =>
                    <li key={index}>
                        <Post post={post} />

                    </li>)}
            </ol>
        </div>
    )
}