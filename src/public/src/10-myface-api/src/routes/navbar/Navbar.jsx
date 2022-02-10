import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export function Navbar() {
    
    return (
        <div className="navbar">
            <header>
                <h1>My-Face!</h1>
                <nav>
                    <Link to="/users">Users</Link> |{" "}
                    <Link to="/posts">Posts</Link>

                </nav>
            </header>
        </div>
    )
}