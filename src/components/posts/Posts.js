import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/post.service";
import PostDetails from "../post-details/Post-Details";
import {Route} from "react-router-dom";
import PostAllDetails from "../post-all-details/Post-All_Details";

function Posts(props) {
    let [posts,setPosts] = useState([]);

    useEffect(() => {
            getPosts().then(value => setPosts(value) )
        }, [])

    return (
        <div>
            {posts.map(post=> <PostDetails post={post} key={post.id} />)}
            <Route path={`/posts/:id`} component={PostAllDetails}  />

        </div>
    );
}

export default Posts;