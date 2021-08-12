import React from 'react';

function Comment({comment}) {
    return (
        <div>
            <li>{comment.name}</li>
        </div>
    );
}

export default Comment;