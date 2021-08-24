import React from 'react';
import {useHistory} from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

function User({user}) {
    let history = useHistory()
    // console.log(history)
    let click = ()=> {
        history.push(`/users/` + user.id)
    }
    return (
        <div>
            <h3>{user.id} - {user.name} - {user.email}  <button onClick={click}> See more info </button></h3>
            <Route path={`/users/` + user.id} render={()=>{
                return (<div>{user.id} - {user.name} - {user.email}
                <div>{JSON.stringify(user)}</div></div>)
            }}/>
        </div>
    );
}

export default User;