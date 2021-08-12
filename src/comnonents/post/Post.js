import React from 'react';
import Comments from "../comments/Comments";

function Post({post}) {
    return (
        <div>
            <span>{post.id} - {post.title}</span>
            <Comments postId={post.id}/>
        </div>

    );
}

export default Post;