import { BURN } from '../actions/index.js'

const reducer = (state, /*action*/ { type, payload }) => {
    switch(/*action.type*/ type) {
        case BURN:
            return state + /*action.payload*/ payload
        default:
            return state
    }
}

export default reducer