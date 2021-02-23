import store from './store.js'
import { BURN } from './actions/index.js'
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
        type: BURN,
        payload: 1.42,
    })
}
window.burn.addEventListener('click', burn)