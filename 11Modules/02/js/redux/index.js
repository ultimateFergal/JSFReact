const createStore = (reducer, initialState) => {
    let state = initialState
    let updater = () => {}

    const getState = () => state // Devolver estado actual de la aplicación

    const dispatch = (action) => { //Para invocar cambios dentro del estado, modificación del estado por las acciones despachadas con dispatch
        state = reducer(state, action)
        updater()
    }
    const subscribe = (listener) => {
        updater = listener
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}

function combineReducers() {

}

export { createStore, combineReducers }

// export default createStore