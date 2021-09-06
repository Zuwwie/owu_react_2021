import React, {useEffect} from 'react';
import MoviesListCard from "../moviesListCard/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {getMovies, getMoviesList} from "../../services/movies.services";
import './moviesList.css'
import {useParams} from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

function MoviesList() {
    let {movies} = useSelector(state => state)
    let {listId} = useParams('listId');
    // console.log(listId)
    listId = parseInt(listId)
    // console.log(listId)

    let dispatch = useDispatch();

    useEffect(() => {
        getMoviesList(listId).then(value => {
                // console.log(value)
                dispatch({type: 'GET_MOVIES', payload: value.results})
            }
        )
    }, [listId]);

    return (
        <div className={'moviesList'}>
            {movies.map(movie => <MoviesListCard movie={movie} key={movie.id}/>)}
            <p>
                {listId !==1 && <Link className={'link'} to={'/list/1'}> 1</Link>}

                {listId>5 && <Link className={'link'} to={'/list/' + (listId-4)}>{listId-4}</Link>}
                {listId>4 && <Link className={'link'} to={'/list/' + (listId-3)}>{listId-3}</Link>}
                {listId>3 && <Link className={'link'} to={'/list/' + (listId-2)}>{listId-2}</Link>}
                {listId>2 && <Link className={'link'} to={'/list/' + (listId-1)}>{listId-1}</Link>}

                <Link className={'selected'} to={'/list/' + listId}>{listId}</Link>

                {listId<499 && <Link className={'link'} to={'/list/' + (listId + 1)}>{listId + 1}</Link>}
                {listId<498 && <Link className={'link'} to={'/list/' + (listId + 2)}>{listId + 2}</Link>}
                {listId<497 && <Link className={'link'} to={'/list/' + (listId + 3)}>{listId + 3}</Link>}
                {listId<496 && <Link className={'link'} to={'/list/' + (listId + 4)}>{listId + 4}</Link>}

                {listId !== 500 && <Link className={'link'} to={'/list/500'}>500</Link>}


            </p>
        </div>
    );
}

export default MoviesList;