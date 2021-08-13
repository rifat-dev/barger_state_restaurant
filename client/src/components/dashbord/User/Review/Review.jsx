import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './review.css'
import { getMyReview, clearReviewError } from '../../../../store/Review/review.action'
import SideBar from '../../SideBar/SideBar'
import ReviewForm from './ReviewForm';

const Review = () => {

    const dispatch = useDispatch()
    const { review, loading, error } = useSelector(state => state.myReview)

    console.log(!review)

    useEffect(() => {
        dispatch(getMyReview())
    }, [])

    return (
        <div className="user-review" >
            <div className="user-review_sideBar">
                <SideBar />
            </div>
            <div className="user-review_body">
                <div className="user-review_body-inner">
                    {
                        Object.keys(review).length === 0 ?
                            <ReviewForm /> :
                            <h1>I am Order</h1>
                    }
                </div>
            </div>
        </div>
    );
}

export default Review;
