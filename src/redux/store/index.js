import {createStore} from "redux";
import {rootReducer} from "../reduers/RootReducer";

export let store = createStore(rootReducer);
