import {GET_MOVIES} from "./actionTypes";

const get_Movies_List  = (value) => {
    return {type: GET_MOVIES, payload: value.results}
}

export {get_Movies_List}