import {
    CLEAR_ERROR,
    SET_LOGIN_USER,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from './user.types'

export const userReducer = (state = { user: {}, isAuthenticate: false, loading: false, error: null }, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_LOGIN_SUCCESS:
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticate: true,
                user: action.payload.user
            }
        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticate: false,
                user: {}
            }
        case SET_LOGIN_USER:
            return {
                ...state,
                isAuthenticate: true,
                user: action.payload
            }
        case USER_LOGIN_FAIL:
        case USER_REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case USER_LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload.error
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}