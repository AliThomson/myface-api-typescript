import React, { useState, useEffect} from "react";
import {useSearchParams, Link} from "react-router-dom"
import { getPosts } from "../../../clients/myFaceClients";
import { PostList } from "../postList/PostList";

export function PostListPage() {

    const [postList, setPostList] = useState();
    const [nextUrl, setNextUrl] = useState();
    const [previousUrl, setPreviousUrl] = useState();

    const [searchParams] = useSearchParams();
    const pageNumber = searchParams.get("page");
    const pageSize = searchParams.get("pageSize");

    useEffect(
        function() {
            getPosts(pageNumber, pageSize)
                .then(postsResults => {
                    setPostList(postsResults.results);
                    setNextUrl(postsResults.next);
                    setPreviousUrl(postsResults.previous);
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
            <h2>MyFace: Posts</h2>
                {nextPrevLinks}
                {
                    postList !== undefined 
                    ? <PostList postList={postList} />
                    : <p>Loading posts...</p>
                }
    
        </main>
    )
}