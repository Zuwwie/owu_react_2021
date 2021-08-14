import React from 'react';
import './User.css'

function User({user, thisUser}) {
    console.log(user)
    return (
            <div className={`user`}>
            {user.name} - <button onClick={()=>thisUser(user)}>More info</button>
             </div>
    );
}

export default User;