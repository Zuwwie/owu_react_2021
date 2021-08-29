import logo from './logo.svg';
import './App.css';
import {useReducer} from "react";


const reducer =(state, action) => {
    if (action.obg && action.do === `+10`)
    {
        return {...state,first: state.first+10}
    } else if (action.obg && action.do === `-2`) {
        return {...state, first: state.first-2}
    }
    return state
}

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
