import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/post.service";
import Post from "../post/Post";
import Comments from "../comments/Comments";

function Posts({userId}) {
    console.log(userId)
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(userId).then(value => setPosts([...value]))
    }, []);
    return (
        <div>

            {posts.map((post) => <Post key={post.id} post={post}/>)}


        </div>
    );
}

export default Posts;