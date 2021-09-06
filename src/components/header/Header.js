import React from 'react';
import './Header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

function Header(props) {
    return (
        <div className={'header'}>
            <div>
                <Link to={`/list/1`}>HOME PAGE</Link>
            </div>
        </div>
    );
}

export default Header;