import './App.css'
import Header from "./components/header/Header";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import MoviesPage from "./components/moviesPage/MoviesPage";
import MovieInfo from "./components/movieInfo/MovieInfo";
import Footer from "./components/footer/Footer";
import {useState} from "react";


function App() {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <Router>
            <Route exact path="/">
                <Redirect to="/list/1"/>
            </Route>
            <div className={isActive ? "theme" : null}>

                <div className={'content'}>
                    <Header handleToggle={handleToggle} theme={isActive}/>
                    <Route exact path={'/list/:listId'}>
                        <MoviesPage/>
                    </Route>
                    <Route path={`/about/:id`} render={(props) => {
                        return <MovieInfo  {...props}/>
                    }}/>
                </div>
                <Footer/>
            </div>

        </Router>
    );
}

export default App;
