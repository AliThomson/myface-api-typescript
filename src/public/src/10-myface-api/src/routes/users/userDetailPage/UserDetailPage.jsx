import React, { useState, useEffect} from "react";
import { User } from "../user/User";
import { PostList } from "../../posts/postList/PostList";
import { useParams } from "react-router-dom";

export function UserDetailPage() {
    const parUserId = useParams();
    const [userDetails, setUser] = useState();
    

    useEffect(
        function() {
            fetch(`http://localhost:3001/users?page=${parUserId.userId}`)
                .then(response => response.json())
                .then(userJson => setUser(userJson));
                
        },
        [parUserId.userId]
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