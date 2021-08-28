import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import {useParams} from "react-router";
import PostAllDetails from "../post-all-details/Post-All_Details";

function PostDetails({post}) {
    return (
        <div>
            <h2>{post.id} - {post.title}</h2>
            <Link to={`/posts/` + post.id}>More info</Link>
        </div>
    );
}

export default PostDetails;