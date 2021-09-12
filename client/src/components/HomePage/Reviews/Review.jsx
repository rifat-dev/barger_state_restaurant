import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Carousel from 'react-elastic-carousel';
import './review.css'

import ReviewCard from './ReviewCard';

import { getReviews } from '../../../store/Review/review.action'
const Review = () => {

    const { reviews, loading, error } = useSelector(state => state.reviews)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 1, itemsToScroll: 1 }
    ];

    return (
        <section className="review-section">
            <div className=" container" >
                <div className="review-header">
                    <h2 className="title">Clients Feedback</h2>
                </div>
                {
                    reviews && <Carousel enableAutoPlay
                        autoPlaySpeed={2000} breakPoints={breakPoints}
                    >
                        {
                            reviews.map(review => <ReviewCard key={review._id} review={review} />)
                        }
                    </Carousel>
                }
            </div>
        </section>
    );
}

export default Review;
