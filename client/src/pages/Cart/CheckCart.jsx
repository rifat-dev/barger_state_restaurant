import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import CheckoutFoodCard from './CheckOutFoodCard'


const CheckCart = ({ isData }) => {

    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)

    let totalFoodLength = 0;
    let subtotal = 0;
    let tax = 0;
    let delivery = 10;
    let total = 0;

    if (cartItems) {

        const subtotalCalculate = cartItems.reduce((acc, f) => Number(acc) + Number(f.price) * Number(f.quantity), 0);
        subtotal = Number(subtotalCalculate);
        tax = (subtotal * 5) / 100;
        total = subtotal + tax + delivery;
        //total FoodLength
        const getQuantity = cartItems.map(food => food.quantity);
        totalFoodLength = getQuantity.reduce((acc, curr) => acc + curr, 0);
    }

    const saveInfo = () => {
        const priceInfo = {
            totalItem: totalFoodLength,
            subtotal: subtotal,
            tax: tax,
            delivery: delivery,
            total: total
        }
        sessionStorage.setItem('priceInfo', JSON.stringify(priceInfo))
    }



    return (
        <div className='check_cart'>
            <h5>Check Cart</h5>
            <hr />
            <div className='text-left'>
                <p>From <strong  >Burger State</strong> <br />Arriving in 20-30 min <br /> 107 Rd No 8</p>
            </div>
            <div className='mt-3 checkOutCardContainer'>
                {
                    cartItems.length > 0 ?
                        cartItems.map(fdDetail => <CheckoutFoodCard key={fdDetail._id} fdDetail={fdDetail} />)
                        :
                        <div className='text-center d-flex justify-content-center align-items-center categories_container w-100'>
                            <img className='loading_spin' src="" alt="loading" />
                        </div>
                }
            </div>
            <div className='mt-3'>
                <div className='d-flex justify-content-between'>
                    <p>Subtotal- {totalFoodLength} item</p>
                    <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p>Tax</p>
                    <p>${tax.toFixed(2)}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p>Delivery Fee</p>
                    <p>${delivery.toFixed(2)}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <h5 className='total'>Total</h5>
                    <p>${total.toFixed(2)}</p>
                </div>
            </div>
            {
                isData && cartItems.length > 0 ?
                    <Link
                        to="/user/payment"
                        className='w-100 mt-3 check_your_food_active btn'
                        onClick={saveInfo}
                    >
                        Processing To Pay</Link>
                    :
                    <button type='button' disabled className=' disable-btn mt-3 w-100 check_your_food_disabled'>Processing To Pay</button>
            }
        </div>
    );
}

export default CheckCart;
