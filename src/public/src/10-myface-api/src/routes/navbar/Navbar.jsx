import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    
    return (
        <div className="navbar">
            <header>
                <h1>My-Face!</h1>
                <nav
                    style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
                >
                <Link to="/users">Users</Link> |{" "}
                <Link to="/posts">Posts</Link>

                </nav>
            </header>
        </div>
    )
}