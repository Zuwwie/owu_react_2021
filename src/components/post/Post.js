import React from 'react';

function Post({post,idOfPosts}) {

   const postIdIs = (post) => {
       idOfPosts(post)
   }
    return (
        <div>
            {post.id} - {post.title} <button onClick={()=>postIdIs(post)}>See More</button>
        </div>
    );
}

export default Post;