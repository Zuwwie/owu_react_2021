import React from 'react';
import Posts from "../posts/Posts";

function User({user}) {
    return (
        <div>
            {console.log(`User work!`)}
            <h2>{user.name} - {user.id}</h2>
            <p>{user.email}</p>
            <div className={`Post`}>
                <Posts userId = {user.id} />
            </div>

        </div>
    );
}

export default User;