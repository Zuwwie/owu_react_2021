import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/user.service";
import User from "../user/User";

function Users(props) {
    let [users,setUsers] = useState([]);

    useEffect(() => {
            getUsers().then(value => setUsers([...value]))
        }, [])

    return (
        <div>
            {users.map(user=><User user={user} key={user.id} />)}

        </div>
    );
}

export default Users;