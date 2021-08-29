const reducer =(state, action) => {
    if (action.obg && action.do === `+10`)
    {
        return {...state,first: state.first+10}
    } else if (action.obg && action.do === `-2`) {
        return {...state, first: state.first-2}
    }
    return state
}
export default reducer;