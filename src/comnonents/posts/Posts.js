import React, {useEffect, useState} from 'react';
import {getPostsFilter} from "../../services/post.service";
import Post from "../post/Post";

function Posts({userId}) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPostsFilter().then(value => setPosts(value))
    }, []);

    return (
        <div>

            {posts.filter(value => value.userId === userId).map((post) => <Post key={post.id} post={post}/>)}


        </div>
    );
}

export default Posts;