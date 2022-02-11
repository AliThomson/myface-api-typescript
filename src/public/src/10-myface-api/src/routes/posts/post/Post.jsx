import React from "react";
import { PostInfo } from "../postInfo/PostInfo";
import "./Post.scss";
import { likePost } from "../../../clients/myFaceClients";

export function Post( {post }) {
    return (
        <div className="post">
            <h2>{post.message}</h2>
            <img 
                src={post.imageUrl}
                alt={post.message}
                />
                {
                    post.postedBy !== undefined 
                    ? <PostInfo post={post}/>
                    :<p></p>
                }
                <button onClick={() => likePost(post.id)}>👍</button>
        </div>
    )
}