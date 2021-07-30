import {
    CLEAR_ERROR,
    GET_ALL_FOOD_FAIL,
    GET_ALL_FOOD_REQUEST,
    GET_ALL_FOOD_SUCCESS,
    GET_SINGLE_FOOD_FAIL,
    GET_SINGLE_FOOD_REQUEST,
    GET_SINGLE_FOOD_SUCCESS
} from './food.types'

export const foodReducers = (state = { foods: [], loading: false, error: null }, action) => {
    switch (action.type) {
        case GET_ALL_FOOD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_FOOD_SUCCESS:
            return {
                ...state,
                loading: false,
                foods: action.payload
            }
        case GET_ALL_FOOD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
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

export const singleFoodReducer = (state = { food: {}, relatedFoods: [], loading: false, error: null }, action) => {
    switch (action.type) {
        case GET_SINGLE_FOOD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_SINGLE_FOOD_SUCCESS:
            return {
                ...state,
                loading: false,
                food: action.payload.food,
                relatedFoods: action.payload.relatedFoods
            }
        case GET_SINGLE_FOOD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
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