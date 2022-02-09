import React, { useState, useEffect} from "react";
import { useSearchParams, Link } from "react-router-dom";
import { UserList } from "../userList/UserList";

export function UserListPage() {
    const [searchParams] = useSearchParams();
    let pageNumber = Number(searchParams.get("page"));
    pageNumber = (pageNumber === undefined) ? 1: pageNumber;
    
 
    const [userList, setUserList] = useState();

    useEffect(
        function() {
            fetch(`http://localhost:3001/users?page=${pageNumber}`)
                .then(response => response.json())
                .then(userListJson => setUserList(userListJson.results));
        },
        [pageNumber]
    );

    return (
        <main>
            <h2>MyFace: Users</h2>
                {
                    userList !== undefined 
                    ? <UserList userList={userList} />
                    : <p>Loading users...</p>
                }
            <div>
             <Link to={`/users?page=${pageNumber - 1 }`}>Previous</Link> {      }
             <Link to={`/users?page=${pageNumber + 1}`}>Next</Link>
            </div>
        </main>
    )
}