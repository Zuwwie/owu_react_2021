import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from './components/users/Users'
import Posts from './components/posts/Posts'
import Comments from './components/comments/Comments'



function App() {
    return (
        <div>
            <Router>
               <div className={`flex`}>
                   <Link to={`/`}>Home</Link>
                   <Link to={`/users`}>Users</Link>
                   <Link to={`/posts`}>Posts</Link>
                   <Link to={`/comments`}>Comments</Link>
               </div>
                <hr/>
                <br/>
                <Switch>
                    <Route exact path={`/`}>
                        <div>hello</div>
                        <h3>pls click to chose component</h3>
                    </Route>
                    <Route path={`/users`} component={Users}/>
                    <Route path={`/posts`} component={Posts}/>
                    <Route path={`/comments`} component={Comments}/>

                </Switch>


            </Router>
        </div>
    );
}

export default App;
