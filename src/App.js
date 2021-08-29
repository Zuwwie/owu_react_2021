import './App.css';
import {useReducer} from "react";
import reducer from "./redux/redux";



function App() {
    const [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={() => dispatch({obj: `a`, do: `+`})}>Add</button>
            <button onClick={() => dispatch({obj: `a`, do: `-`})}>Minus</button>
            <h1>{b}</h1>
            <button onClick={() => dispatch({obj: `b`, do: `+`})}>Add</button>
            <button onClick={() => dispatch({obj: `b`, do: `-`})}>Minus</button>
            <h1>{c}</h1>
            <button onClick={() => dispatch({obj: `c`, do: `+`})}>Add</button>
            <button onClick={() => dispatch({obj: `c`, do: `-`})}>Minus</button>

        </div>
    );
}

export default App;
