import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducers from './rootReducer'


const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ?
            JSON.parse(localStorage.getItem('cartItems')) : [],
        orderInfo: localStorage.getItem('orderInfo') ?
            JSON.parse(localStorage.getItem('orderInfo')) : {}
    }
}

// let initialState = {
//     cart: {
//         cartItems: localStorage.getItem('cartItems') ?
//             JSON.parse(localStorage.getItem('chartItems')) : [],
//         orderInfo: localStorage.getItem('orderInfo') ?
//             JSON.parse(localStorage.getItem('orderInfo')) : {}
//     }
// }

const midleware = [thunk]
const store = createStore(rootReducers, initialState, composeWithDevTools(applyMiddleware(...midleware)));

export default store