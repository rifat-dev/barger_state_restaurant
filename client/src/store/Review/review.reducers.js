import {
    CLEAR_REVIEW_ERROR,
    GET_ALL_REVIEW_FAIL,
    GET_ALL_REVIEW_REQUEST,
    GET_ALL_REVIEW_SUCCESS,
    USER_CREATE_REVIEW_FAIL,
    USER_CREATE_REVIEW_REQUEST,
    USER_CREATE_REVIEW_RESET,
    USER_CREATE_REVIEW_SUCCESS,
    USER_GET_REVIEW_FAIL,
    USER_GET_REVIEW_REQUEST,
    USER_GET_REVIEW_SUCCESS,

} from './review.types'

export const reviewsReducer = (state = { reviews: [], loading: false, error: null }, action) => {
    switch (action.type) {
        case GET_ALL_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                reviews: action.payload
            }
        case GET_ALL_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_REVIEW_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export const userReviewReducer = (state = { review: {}, loading: false, error: null }, action) => {
    switch (action.type) {
        case USER_GET_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_GET_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                review: action.payload
            }
        case USER_GET_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_REVIEW_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export const userReviewStatusReducer = (state = { isCreated: false, loading: false, error: null }, action) => {
    switch (action.type) {
        case USER_CREATE_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_CREATE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                isCreated: true,
            }
        case USER_CREATE_REVIEW_RESET:
            return {
                ...state,
                isCreated: false
            }
        case USER_CREATE_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_REVIEW_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}