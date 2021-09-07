import {GET_MOVIES} from "../actions/actionTypes";
import {initialState} from "../state/initialState";

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            // console.log('work_get', action.payload)
            return {...state, movies: [...action.payload]}
        default:
            return state
    }
}