import React, {useEffect} from 'react';
import MoviesListCard from "../moviesListCard/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {getMoviesList} from "../../services/movies.services";
import './moviesList.css'
import {useParams} from "react-router";
import {get_Movies_List} from "../../redux/actions/actions";
import Pagination from "../pagination/Pagination";

function MoviesList() {
    let {movies} = useSelector(state => state)
    let {listId} = useParams('listId');
    listId = parseInt(listId)

    let dispatch = useDispatch();

    useEffect(() => {
        getMoviesList(listId).then(value => {
                dispatch(get_Movies_List(value))
            }
        )
    }, [listId]);

    return (
        <div className={'moviesList'}>
            {movies.map(movie => <MoviesListCard movie={movie} key={movie.id}/>)}
            <Pagination listId={listId}/>
        </div>
    );
}

export default MoviesList;