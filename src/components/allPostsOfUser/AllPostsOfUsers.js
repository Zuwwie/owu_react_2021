import React, {useEffect, useState} from 'react';
import {getPostsOfUser} from "../../services/postsOfUser.service";
import PostOfUser from "../postOfUser/PostOfUser";
import './AllPostsOfUser.css'

function AllPostsOfUsers(props) {
    let id = props.id

    let [allPostOfUser, setAllPostOfUser] = useState([]);

    console.log(allPostOfUser)
     useEffect(() => {
         getPostsOfUser(id).then(value => setAllPostOfUser(value))
         console.log(`Fetch Posts`)
     },[id])


    return (
        <div className={`allposts`}>
            {allPostOfUser.map((post,i)=> <PostOfUser post={post} key={i} /> )}
        </div>
    );
}

export default AllPostsOfUsers;