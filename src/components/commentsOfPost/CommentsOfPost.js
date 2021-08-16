import React, {useEffect, useState} from 'react';
import {getCommentsOfPost} from "../../services/comments.of.post.service";
import Comment from "../comment/Comment";
import './CommentOfPost.css'

function CommentsOfPost({value: post}) {

    let [comments,setComments] = useState([]);
    let [comment,setComment] = useState(null);


     useEffect(() => {
         console.log(`Comments work`)
         getCommentsOfPost().then(value => setComments([...value]))
         setComment(null)
         },[post]);

    const liftComment = (comment) => {
        console.log(comment)
        setComment(comment)
    }


    return (
        <div>
            <div className={`main`}>
                <h2>{post.body}</h2>
                {comments.map(value => <Comment value={value} key={value.id} liftComment={liftComment}/>)}
            </div>
            <div className={`comment`}>
                {comment && <h2>{comment.id} - {comment.body}</h2> }
            </div>
        </div>
    );
}

export default CommentsOfPost;