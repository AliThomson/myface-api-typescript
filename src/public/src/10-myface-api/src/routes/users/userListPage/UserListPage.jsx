import React, { useState, useEffect} from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getUsers } from "../../../clients/myFaceClients";
import { UserList } from "../userList/UserList";

export function UserListPage() {

    const [searchParams] = useSearchParams();
    const pageNumber = searchParams.get("page");
    const pageSize = searchParams.get("pageSize");

    const [userList, setUserList] = useState();
    const [nextUrl, setNextUrl] = useState();
    const [previousUrl, setPreviousUrl] = useState();
    

    useEffect(
        function() {
            getUsers(pageNumber, pageSize)
                .then(usersResults => {
                    setUserList(usersResults.results);
                    setNextUrl(usersResults.next);
                    setPreviousUrl(usersResults.previous);
                });
        },
        [pageNumber, pageSize]
    );

    const nextPrevLinks = <div>
    {
        previousUrl
            ? <Link className="page-arrow" to={previousUrl}>⬅</Link> 
            : <></>
    }
    {
        nextUrl
            ? <Link className="page-arrow" to={nextUrl}>➡</Link>
            : <></>
    }
</div>

    return (
        <main>
            <h2>MyFace: Users</h2>
            {nextPrevLinks}
            {
                userList !== undefined
                    ? <UserList userList={userList} />
                    : <p>Loading users...</p>
            }

        </main>
    )
}