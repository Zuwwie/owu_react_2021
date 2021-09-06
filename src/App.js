import './App.css'
import Header from "./components/header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import MoviesPage from "./components/moviesPage/MoviesPage";
import MovieInfo from "./components/movieInfo/MovieInfo";
import Footer from "./components/footer/Footer";


function App() {
  return (
   <Router>
       <div className={'content'}>
           <Header/>
           <Route exact path={'/list/:listId'}>
               <MoviesPage/>
           </Route>
           <Route path={`/about/:id`} render={(props) => {return <MovieInfo {...props}/>} }/>
       </div>
       <Footer/>
   </Router>
  );
}

export default App;
