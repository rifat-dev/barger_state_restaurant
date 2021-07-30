import axios from 'axios'
import {
    CLEAR_ERROR,
    GET_ALL_FOOD_FAIL,
    GET_ALL_FOOD_REQUEST,
    GET_ALL_FOOD_SUCCESS,
    GET_SINGLE_FOOD_FAIL,
    GET_SINGLE_FOOD_REQUEST,
    GET_SINGLE_FOOD_SUCCESS
} from './food.types'


export const getAllFoods = () => async(dispatch) => {
    try {

        dispatch({ type: GET_ALL_FOOD_REQUEST })

        const { data } = await axios.get('/api/food/all')

        dispatch({
            type: GET_ALL_FOOD_SUCCESS,
            payload: data.foods
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_FOOD_FAIL,
            payload: e.response.data.message
        })
    }
}

export const getSingleFood = (id) => async(dispatch) => {
    try {

        dispatch({ type: GET_SINGLE_FOOD_REQUEST })

        const { data } = await axios.get(`/api/food/single-food/${id}`)

        dispatch({
            type: GET_SINGLE_FOOD_SUCCESS,
            payload: {
                food: data.food,
                relatedFoods: data.relatedFoods
            }
        })

    } catch (e) {
        dispatch({
            type: GET_SINGLE_FOOD_FAIL,
            payload: e.response.data.message
        })
    }
}

export const clearError = () => dispatch => {
    dispatch({ type: CLEAR_ERROR })
}