import React, {useState} from 'react';
import './Header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

function Header({handleToggle, theme}) {
    // console.log(theme)
    return (
        <div className={'header'}>
            <div>
                <Link to={`/list/1`}>HOME PAGE</Link>
            </div>
            <div>
                <button onClick={handleToggle}>
                    {theme && <span>Light </span>}
                    {!theme && <span>Dark </span>}
                     theme</button>
            </div>
        </div>
    );
}

export default Header;