import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/user.service";
import User from "../user/User";

function Users(props) {
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(users => setUsers([...users]))
    },[]);
    return (
        <div>
            {console.log(`Users Work!`)}
            {users.map((user, index)=> <User user={user} key = {index} />)}
        </div>
    );
}

export default Users;