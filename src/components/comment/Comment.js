import React from 'react';

function Comment({value: comment, liftComment}) {



    const liftingId = (comment) => {
        liftComment(comment)
    }

    return (
        <div>
            <h3>{comment.id} - {comment.email} <button onClick={(()=>{liftingId(comment)})}>See text</button></h3>
        </div>
    );
}

export default Comment;