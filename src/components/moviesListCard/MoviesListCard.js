import React from 'react';
import './MoviesListCard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

function MoviesListCard({movie}) {
    return (
            <div className={'movieCard'}>
                <Link to={'/about/' + movie.id}>

                <div className={'img'}><img
                    src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + movie.poster_path} alt=""/></div>
                {movie.title}
                </Link>
            </div>
    );
}

export default MoviesListCard;
