const createStore = (reducer, initialState) => {
    let state = initialState
    let update = () => {}

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

const reducer = (state, action) => {
    switch(action.type) {
        case 'BURN':
            return state + 1.42
        default:
            return state
    }
}
const store = createStore(reducer, 0)
// store.dispatch()
// store.getState()
// store.subscribe()

store.subscribe(() => {
    console.log('ha cambiado algo en el store', store.getState())
    window.result.textContent = `Has quemado ${store.getState()} calorías`
})

store.dispatch('voy a cambiar algo')

const burn = () => {
    console.log('quemando calorías')
    store.dispatch({
        type: 'BURN',
        payload: 1.42,
    })
}
window.burn.addEventListener('click', burn)