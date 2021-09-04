import axios from 'axios'
import {
    ADMIN_ORDERS_GET_REQUEST,
    ADMIN_ORDERS_GET_SUCCESS,
    ADMIN_ORDERS_GET_FAIL,
    CLEAR_ADMIN_ERROR,
    ADMIN_USERS_GET_REQUEST,
    ADMIN_USERS_GET_FAIL,
    ADMIN_FOODS_GET_REQUEST,
    ADMIN_FOODS_GET_FAIL,
    ADMIN_USERS_GET_SUCCESS,
    ADMIN_FOODS_GET_SUCCESS
} from './admin.types'


export const getAdminUsers = () => async(dispatch) => {
    try {

        dispatch({ type: ADMIN_USERS_GET_REQUEST })

        const { data } = await axios.get('/api/user/admin-users')

        dispatch({
            type: ADMIN_USERS_GET_SUCCESS,
            payload: data.users
        })

    } catch (e) {
        dispatch({
            type: ADMIN_USERS_GET_FAIL,
            payload: e.response.data.message
        })
    }
}

export const getAdminFoods = () => async(dispatch) => {
    try {

        dispatch({ type: ADMIN_FOODS_GET_REQUEST })

        const { data } = await axios.get('/api/food/all')

        dispatch({
            type: ADMIN_FOODS_GET_SUCCESS,
            payload: data.foods
        })

    } catch (e) {
        dispatch({
            type: ADMIN_FOODS_GET_FAIL,
            payload: e.response.data.message
        })
    }
}

export const getAdminOrders = () => async(dispatch) => {
    try {
        dispatch({ type: ADMIN_ORDERS_GET_REQUEST })

        const { data } = await axios.get('/api/order/admin-order')

        dispatch({
            type: ADMIN_ORDERS_GET_SUCCESS,
            payload: data.orders
        })

    } catch (e) {
        dispatch({
            type: ADMIN_ORDERS_GET_FAIL,
            payload: e.response.data.message
        })
    }
}

export const adminErrorClear = () => dispatch => {
    dispatch({ type: CLEAR_ADMIN_ERROR })
}