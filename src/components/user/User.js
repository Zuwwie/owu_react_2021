// rsf
import React from 'react';

function User({user: {name, surname, age, info, photo}}) {
    return (
        <div>
            <h2>{name} - {surname} -Age: {age}</h2>
            <p>{info}</p>
            <img src={photo} alt="img"/>
        </div>
    );
}

export default User;

