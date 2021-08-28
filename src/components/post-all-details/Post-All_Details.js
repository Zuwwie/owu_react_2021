import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router";
import {getPost} from "../../services/post.service";

function PostAllDetails(props) {
    let {id} = useParams('id')
    console.log(id)

    let [post,setPost] = useState({});

    useEffect(() => {
            getPost(id).then(r => setPost(r))
        }, [id])

    return (
        <div>
            <div>{post.id} - {post.body}</div>
        </div>
    );
}

export default PostAllDetails;