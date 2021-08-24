import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router";
import {getUser} from "../../services/user.service";

function UserDetails(props) {
let id = useParams('id');
    console.log(id)
    let [user,setUser] = useState({});

    useEffect(() => {
            getUser(id['id']).then(value => setUser(value))
        }, [id])
    return (
        <div>
            <hr/>

            {user.id} - {user.name} - {user.emai} - {user.username} - {user.phone}
        </div>
    );
}
export default UserDetails;