import {
    ADMIN_ORDERS_GET_REQUEST,
    ADMIN_ORDERS_GET_SUCCESS,
    ADMIN_ORDERS_GET_FAIL,
    CLEAR_ADMIN_ERROR,
    ADMIN_FOODS_GET_REQUEST,
    ADMIN_USERS_GET_REQUEST,
    ADMIN_USERS_GET_SUCCESS,
    ADMIN_USERS_GET_FAIL,
    ADMIN_FOODS_GET_SUCCESS,
    ADMIN_FOODS_GET_FAIL
} from './admin.types'

export const adminReducer = (state = {
    orders: [],
    users: [],
    foods: [],
    loading: false,
    error: null
}, action) => {
    switch (action.type) {
        case ADMIN_ORDERS_GET_REQUEST:
        case ADMIN_FOODS_GET_REQUEST:
        case ADMIN_USERS_GET_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADMIN_USERS_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case ADMIN_USERS_GET_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADMIN_FOODS_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                foods: action.payload
            }
        case ADMIN_FOODS_GET_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADMIN_ORDERS_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        case ADMIN_ORDERS_GET_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ADMIN_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}