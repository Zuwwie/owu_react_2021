import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../../services/allUser.services";
import User from "../user/User";
import './AllUsers.css'
import AllPostsOfUsers from "../allPostsOfUser/AllPostsOfUsers";

function AllUsers() {

    let [allUsers, setAllUsers] = useState([]);
    let [userId, setUserId] = useState(null);


    const thisUser = (user) => {
        console.log(user);
        setUserId(user.id)
    }


    useEffect(() => {
        getAllUsers().then(value => setAllUsers(value))
        console.log(`Fetch users`)
    }, [])

    return (
        <div>
            <div className={`users`}>
                {
                    allUsers.map(user => <User user={user} key={user.id} thisUser={thisUser}/>)
                }
            </div>
            {
                userId && <AllPostsOfUsers id={userId}/>
            }
        </div>
    );
}

export default AllUsers;