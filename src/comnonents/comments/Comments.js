import React, {useEffect, useState} from 'react';
import {getComments} from "../../services/comment.service";
import Comment from "../comment/Comment";

function Comments({postId}) {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        getComments(postId).then(value => setComments([...value]))
    },[])

    return (
        <div>
            {comments.map((comment)=><Comment comment = {comment} key = {comment.id}/>)}
        </div>
    );
}

export default Comments;