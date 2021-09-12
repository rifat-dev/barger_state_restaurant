import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert'

import { createMyReview, clearReviewError } from '../../../../store/Review/review.action'
import { USER_CREATE_REVIEW_RESET } from '../../../../store/Review/review.types'

const ReviewForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [review, setReview] = useState("")

    const { user } = useSelector(state => state.auth)
    const { isCreated, loading, error } = useSelector(state => state.myReviewStatus)

    const alert = useAlert()
    const dispatch = useDispatch()
    const history = useHistory()

    console.log(history)

    useEffect(() => {
        setName(user.name)
        setEmail(user.email)
    }, [user])

    useEffect(() => {

        if (error) {
            alert.error(error)
            dispatch(clearReviewError())
        }

        if (isCreated) {
            alert.success("Review create success")
            dispatch({ type: USER_CREATE_REVIEW_RESET })
            history.push('/user/review')
        }

    }, [error, isCreated, history, dispatch])

    const submitReview = (e) => {
        e.preventDefault()

        const newReview = {
            name,
            email,
            description: review
        }

        dispatch(createMyReview(newReview))
    }

    return (
        <div className="card card-body review-card">
            <h2>Give a valuable feedback</h2>
            <form onSubmit={submitReview} >
                <div className="form-group">
                    <input
                        name='name'
                        type="text"
                        defaultValue={user.name}
                        className="form-control"
                        placeholder="Your name / Company's name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input name='email' type="email" defaultValue={user.email} className="form-control" placeholder="Your email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name='review_text' className="form-control" placeholder='Description' rows="4"
                        onChange={(e) => setReview(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn-grad"
                    disabled={loading ? true : false}
                >Submit</button>
            </form>
        </div>
    );
}

export default ReviewForm;
