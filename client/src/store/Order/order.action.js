import axios from 'axios'
import {
    CLEAR_ORDER_ERROR,
    USER_ORDERS_GET_FAIL,
    USER_ORDERS_GET_REQUEST,
    USER_ORDERS_GET_SUCCESS,
    USER_ORDER_FAIL,
    USER_ORDER_REQUEST,
    USER_ORDER_SUCCESS,

} from './order.types'

import { CLEAR_CART } from '../Cart/cart.types'


export const createOrder = (orderDetails) => async(dispatch) => {
    try {

        dispatch({ type: USER_ORDER_REQUEST })

        await axios.post('/api/order/create-order', orderDetails)

        dispatch({ type: USER_ORDER_SUCCESS })

        dispatch({ type: CLEAR_CART })

        localStorage.removeItem('cartItems')
        localStorage.removeItem('orderInfo')
        sessionStorage.removeItem('cartInfo')



    } catch (e) {
        dispatch({
            type: USER_ORDER_FAIL,
            payload: e.response.data.message
        })
    }
}

export const getMyOrders = () => async(dispatch) => {
    try {

        dispatch({ type: USER_ORDERS_GET_REQUEST })

        const { data } = await axios.get(`/api/order/my-orders`)

        dispatch({
            type: USER_ORDERS_GET_SUCCESS,
            payload: data.orders
        })

    } catch (e) {
        dispatch({
            type: USER_ORDERS_GET_FAIL,
            payload: e.response.data.message
        })
    }
}

export const clearError = () => dispatch => {
    dispatch({ type: CLEAR_ORDER_ERROR })
}