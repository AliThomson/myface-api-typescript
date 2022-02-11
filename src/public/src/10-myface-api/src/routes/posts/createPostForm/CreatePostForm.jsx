import React, { useState } from "react";
import { createPost } from "../../../clients/myFaceClients";
import { Route, useNavigate } from "react-router-dom";


export function CreatePostForm() {
    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();

    return <form onSubmit={e => {
        e.preventDefault();       
        createPost(message, imageUrl);
        alert('Submitted!');
        navigate("/posts");
            }
        }>
        <p>Message: {message} ImageURL: {imageUrl}</p>
        <label for="message">Message</label>
        <input 
            type="text" 
            id="message" 
            name="message" 
            onChange={e => setMessage(e.target.value)}
            />
        <label for="imageUrl">Image URL</label>
        <input
            type="text" 
            id="imageUrl" 
            name="imageUrl" 
            onChange={e => setImageUrl(e.target.value)}
            />
        <input type="submit" value="Submit" />
    </form>
}