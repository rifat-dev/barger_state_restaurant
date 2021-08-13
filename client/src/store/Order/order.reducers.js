import {
    CLEAR_ORDER_ERROR,
    ORDER_CREATED_RESET,
    USER_ORDERS_GET_FAIL,
    USER_ORDERS_GET_REQUEST,
    USER_ORDERS_GET_SUCCESS,
    USER_ORDER_FAIL,
    USER_ORDER_REQUEST,
    USER_ORDER_SUCCESS,

} from './order.types'

export const orderReducer = (state = { isCreated: false, loading: false, error: null }, action) => {
    switch (action.type) {
        case USER_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_ORDER_SUCCESS:
            return {
                ...state,
                isCreated: true,
                loading: false
            }
        case USER_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ORDER_CREATED_RESET:
            return {
                ...state,
                isCreated: false
            }
        case CLEAR_ORDER_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export const userOrdersReducers = (state = { orders: [], loading: false, error: null }, action) => {
    switch (action.type) {
        case USER_ORDERS_GET_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_ORDERS_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        case USER_ORDERS_GET_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ORDER_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}