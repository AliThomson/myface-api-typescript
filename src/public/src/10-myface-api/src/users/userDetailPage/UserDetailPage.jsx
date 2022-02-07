import React, { useState, useEffect} from "react";
import { User } from "../user/User";
import { PostList } from "../../posts/postList/PostList";

export function UserDetailPage() {

    const [userDetails, setUser] = useState();
    let userId = 50;

    useEffect(
        function() {
            fetch(`http://localhost:3001/users/${userId}}`)
                .then(response => response.json())
                .then(userJson => setUser(userJson));
                
        },
        []
    );

    return (
        <main>
            <h2>MyFace: User Details</h2>
                {
                    userDetails !== undefined 
                    ? <User user={userDetails} />
                    
                    : <p>Loading user...</p>
                    
                }
                {
                    userDetails !== undefined 
                    ? <PostList postList={userDetails.posts} />
                    
                    : <p>Loading user's posts...</p>
                    
                }
    
        </main>
    )
}