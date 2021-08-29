import './App.css';
import {useReducer} from "react";
import reducer from "./reducer/reducer";




function App() {
    const [{first}, dispatch] = useReducer(reducer, {first: 0});
    return (
    <div>
        <h2>{first}</h2>
        <button onClick={()=>dispatch({obg: `first`, do: `+10`})}>+10</button>
        <button onClick={()=>dispatch(({obg:`first`, do: `-2`}))}>-2</button>
    </div>
  );
}

export default App;
