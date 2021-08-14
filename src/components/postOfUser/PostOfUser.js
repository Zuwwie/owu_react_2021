import React from 'react';

function PostOfUser({post}) {
    return (
        <div>
            <h3>{post.userId} --  {post.id} --- {post.title}</h3>{}
        </div>

    );
}

export default PostOfUser;