import { combineReducers } from 'redux'

import {
    userReducer
} from './User/user.reducers'

import {
    foodReducers,
    singleFoodReducer
} from './Food/food.reducers'

import {
    cartReducer
} from './Cart/cart.reducers'

const rootReducers = combineReducers({
    auth: userReducer,
    foods: foodReducers,
    singleFood: singleFoodReducer,
    cart: cartReducer
})

export default rootReducers