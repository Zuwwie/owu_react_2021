import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzA5N2ZmZTAyZDkyYTRkYTEzZTllYWUxYzFhYzA0NCIsInN1YiI6IjYxMzRkNWVjZTkzZTk1MDAyYmJiODQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.toVFYyEJHfQCnDrCusEEVHdBMYdWY1f-4iSc7rNSQhY'
    }
})

// const getMovies = () => instance.get('/discover/movie/').then(value => value.data);
const getMoviesList = (id) => instance.get('/discover/movie/?page=' + id).then(value => value.data);


const getInfo = (id) => instance.get(`/movie/` + id).then(value => value.data);


export {getInfo,getMoviesList}