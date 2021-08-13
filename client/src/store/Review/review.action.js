import axios from 'axios'
import {
    USER_GET_REVIEW_REQUEST,
    USER_GET_REVIEW_SUCCESS,
    USER_GET_REVIEW_FAIL,
    CLEAR_REVIEW_ERROR
} from './review.types'


export const getMyReview = () => async(dispatch) => {
    try {

        dispatch({ type: USER_GET_REVIEW_REQUEST })

        const { data } = await axios.get('/api/review/my-review')

        dispatch({
            type: USER_GET_REVIEW_SUCCESS,
            payload: data.review
        })

    } catch (e) {
        dispatch({
            type: USER_GET_REVIEW_FAIL,
            payload: e.response.data.message
        })
    }
}

export const clearReviewError = () => dispatch => {
    dispatch({ type: CLEAR_REVIEW_ERROR })
}