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
import Posts from "./components/posts/Posts";

function App() {
    return (
        <Router>
            <div>
                <Link to={`/`}> Home </Link>
                <Link to={`/users`}>Users Link</Link>
                <Link to={`/posts`}>Post Link</Link>
            </div>

            <Route path={`/users`} component={Users}/>
            <Route path={`/users/:id`} render={(props) => {return <UserDetails {...props}/>} }/>
            <Route path={`/posts`} component={Posts}/>
        </Router>
    );
}

export default App;
