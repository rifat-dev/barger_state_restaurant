import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_TO_CART,
    SAVE_ORDER_INFO,
} from './cart.types'

export const cartReducer = (state = { cartItems: [], orderInfo: {} }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let food = action.payload.item
            const isFound = state.cartItems.find(f => f._id === food._id)

            if (isFound) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(f => f._id === isFound._id ? food : f)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, food]
                }
            }
        case REMOVE_TO_CART:
            let id = action.payload
            return {
                ...state,
                cartItems: state.cartItems.filter(f => f._id !== id)
            }
        case SAVE_ORDER_INFO:
            return {
                ...state,
                orderInfo: action.payload
            }
        case CLEAR_CART:
            return {
                cartItems: [],
                orderInfo: {}
            }
        default:
            return state
    }
}