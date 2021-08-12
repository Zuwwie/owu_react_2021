import React, {useEffect, useState} from 'react';
import {getCommentsFillter} from "../../services/comment.service";
import Comment from "../comment/Comment";

function Comments({postId}) {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        getCommentsFillter().then(value => setComments([...value]))
    },[])

    return (
        <div>
            {comments.filter(value => value.postId === postId).map((comment)=><Comment comment = {comment} key = {comment.id}/>)}
        </div>
    );
}

export default Comments;