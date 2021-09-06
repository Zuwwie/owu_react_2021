import React, {useEffect} from 'react';
import MoviesList from "../moviesList/MoviesList";
import {getMoviesList} from "../../services/movies.services";
import {useParams} from "react-router";

function MoviesPage({handleToggle}) {




    // useEffect(() => {
    //           getMoviesList().then(value => console.log(value))
    //       }, []);




    return (
        <div>
            <MoviesList/>
        </div>
    );
}

export default MoviesPage;