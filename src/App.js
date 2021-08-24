import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
import React from "react";
import UserDetails from "./components/user-details/User-Details";

function App() {
    return (
        <Router>
            <div>
                <Link to={`/`}> Home </Link>
                <Link to={`/users`}>Users Link</Link>
            </div>

            <Route path={`/users`} component={Users}/>
            <Route path={`/users/:id`} render={(props) => {return <UserDetails {...props}/>} }/>

        </Router>
    );
}

export default App;
