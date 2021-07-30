import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addToCart } from '../../../store/Cart/cart.action'

const FoodCard = ({ food }) => {

    const dispatch = useDispatch()

    const orderFood = () => {
        dispatch(addToCart(food._id, 1))
    }

    return (
        <div className="food-card" >
            <div className="food-card-image">
                <img src={food.foodImage} alt="foodImage" />
            </div>
            <div className="food-card-content">
                <Link className="link" to={`/single-food/${food._id}`} >
                    <h3>{food.name}</h3>
                </Link>
                <h2>{`$${food.price}`}</h2>
                <button onClick={orderFood} >Add To Cart</button>
            </div>
        </div>
    );
}

export default FoodCard;
