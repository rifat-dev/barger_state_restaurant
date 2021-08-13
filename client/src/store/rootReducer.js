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

import {
    orderReducer,
    userOrdersReducers
} from './Order/order.reducers'


import {
    userReviewReducer,
    userReviewStatusReducer
} from './Review/review.reducers'

const rootReducers = combineReducers({
    auth: userReducer,
    foods: foodReducers,
    singleFood: singleFoodReducer,
    cart: cartReducer,
    order: orderReducer,
    myOrders: userOrdersReducers,
    myReview: userReviewReducer,
    myReviewStatus: userReviewStatusReducer
})

export default rootReducers