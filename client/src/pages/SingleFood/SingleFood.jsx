import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import './singleFood.css'
import { getSingleFood, clearError } from '../../store/Food/food.action'
import Loader from '../../components/layouts/loader/Loader'

import { addToCart } from '../../store/Cart/cart.action'

const SingleFood = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { food, relatedFoods, loading, error } = useSelector(state => state.singleFood)

    const foodAdd = () => {
        dispatch(addToCart(food._id, 1))
    }

    useEffect(() => {
        dispatch(getSingleFood(id))
    }, [id])
    return (
        <>
            {
                !loading ?
                    <section className="single-food">
                        <div className="single-food-inner">
                            <div className="food__photo">
                                <div className="photo-container">
                                    <div className="photo-main">
                                        <img src={food.foodImage} alt={food.name} />
                                    </div>
                                    <div className="photo-album">
                                        <ul>
                                            {relatedFoods.slice(0, 3).map(f => (
                                                <Link to={`/single-food/${f._id}`} > <li><img src={f.foodImage} alt={f.name} /></li></Link>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="food__info">
                                <div className="title">
                                    <h1>{food.name}</h1>
                                </div>
                                <div className="price">
                                    $ <span>{food.price}</span>
                                </div>
                                <div className="variant">
                                    <h3>Title</h3>
                                    <p>{food.title}</p>
                                </div>
                                <div className="variant">
                                    <h3>Part</h3>
                                    <p>{food.part}</p>
                                </div>
                                <div className="description">
                                    <h3>Description</h3>
                                    <p>{food["description"]}</p>
                                </div>
                                <button
                                    className="btn-grad"
                                    onClick={foodAdd}
                                >ADD TO CART
                                </button>
                            </div>
                        </div>
                    </section>
                    :
                    <>
                        <Loader />
                    </>
            }
        </>
    );
}

export default SingleFood;
