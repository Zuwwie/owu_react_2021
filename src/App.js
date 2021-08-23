import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Cars from "./component/cars/Cars";
import CreateCar from "./component/create-car/Create-Car";
function App() {
  return (
      <Router>
        <div>
          <Link to={`/`}>See All Cars</Link>
          <Link to={'/create-car'}>Create Car</Link>

          <Switch>
            <Route exact path={`/`} component={Cars}/>
            <Route path={`/create-car`} component={CreateCar}/>
          </Switch>
        </div>

      </Router>

  );
}

export default App;
