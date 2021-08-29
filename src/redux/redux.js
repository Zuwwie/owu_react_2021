const reducer = (state, action) => {
    console.log(action)
    console.log(state)

    if (action.do === `+`) {
        switch (action.obj) {
            case `a`:
                return {...state, a: state.a + 1}
            case `b`:
                return {...state, b: state.b + 1}
            case `c`:
                return {...state, c: state.c + 1}
            default:
                return {...state}
        }
    } else {
        switch (action.obj) {
            case `a`:
                return {...state, a: state.a - 1}
            case `b`:
                return {...state, b: state.b - 1}
            case `c`:
                return {...state, c: state.c - 1}
            default:
                return {...state}
        }
    }
}

export default reducer;