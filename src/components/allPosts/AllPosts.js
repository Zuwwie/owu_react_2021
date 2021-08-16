import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../../services/posts.service";
import Post from "../post/Post";
import './AllPosts.css'
import CommentsOfPost from "../commentsOfPost/CommentsOfPost";

function AllPosts(props) {

    let [allPosts, setAllPosts] = useState([]);
    let [bodyOfPost, setBodyOfPost] = useState(null);


    useEffect(() => {
        getAllPosts().then(value => setAllPosts([...value]))
        console.log(`Posts work`)
    }, [])

    const idOfPosts = (post) => {
        console.log(post)
        setBodyOfPost(post)
    }


    return (
        <div>
            <div className={`main`}>
                {allPosts.map(post => <Post post={post} key={post.id} idOfPosts={idOfPosts}/>)}

            </div>
            <div className={`post`}>
                {
                    bodyOfPost && <CommentsOfPost value={bodyOfPost} />
                }
            </div>
        </div>
    );
}

export default AllPosts;