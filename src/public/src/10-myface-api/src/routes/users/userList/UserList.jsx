import React from "react";
import { User } from "../user/User";
import './userList.css';

export function UserList ({ userList }) {
    return (
        <ol className="userList">
            {userList.map((user, index) =>
                <li key={index}>
                    <User user={user} />

                </li>)}
        </ol>
    )
}