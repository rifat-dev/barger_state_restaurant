import axios from 'axios'
import {

    CLEAR_ERROR,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,

} from './user.types'


export const userLogin = (email, password) => async(dispatch) => {
    try {

        dispatch({ type: USER_LOGIN_REQUEST })



        const { data } = await axios.post('/api/user/signIn', { email, password })

        localStorage.setItem("auth", JSON.stringify({
            token: data.token,
            user: data.user
        }))

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: {
                user: data.user
            }
        })

    } catch (e) {

        dispatch({
            type: USER_LOGIN_FAIL,
            payload: {
                error: e.response.data.message ? e.response.data.message : e.response.data
            }
        })
    }
}

export const userRegister = (formData) => async(dispatch) => {
    try {

        dispatch({ type: USER_REGISTER_REQUEST })

        const { data } = await axios.post('/api/user/register', formData)

        localStorage.setItem("auth", JSON.stringify({
            token: data.token,
            user: data.user
        }))

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: {
                user: data.user
            }
        })

    } catch (e) {

        dispatch({
            type: USER_REGISTER_FAIL,
            payload: {
                error: e.response.data.message
            }
        })
    }
}

export const userLogOut = () => async(dispatch) => {
    try {

        await axios.get('/api/user/signout')

        localStorage.removeItem("auth")

        dispatch({ type: USER_LOGOUT_SUCCESS })

    } catch (e) {

        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: {
                error: e.response.data.message
            }
        })
    }
}

export const clearError = () => dispatch => {
    dispatch({ type: CLEAR_ERROR })
}