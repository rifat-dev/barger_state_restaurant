import axios from 'axios'
import {
    ADD_TO_CART,
    REMOVE_TO_CART,
    SAVE_ORDER_INFO
} from './cart.types'


export const addToCart = (id, qty) => async(dispatch, getState) => {

    const { data } = await axios.get(`/api/food/order-food/${id}`)

    const item = {
        _id: data.food._id,
        name: data.food.name,
        price: data.food.price,
        image: data.food.foodImage,
        menu: data.food.part,
        quantity: qty
    }

    dispatch({
        type: ADD_TO_CART,
        payload: {
            item: item
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))

}

export const removeToCart = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_TO_CART,
        payload: id
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const saveDeliveryInfo = (detailes) => (dispatch, getState) => {

    dispatch({
        type: SAVE_ORDER_INFO,
        payload: detailes
    })

    localStorage.setItem("orderInfo", JSON.stringify(getState().cart.orderInfo))
}