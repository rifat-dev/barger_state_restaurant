import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import bikeImg from '../../assets/bike.png';
import helmet from '../../assets/halmet.png';


import { createOrder, clearError } from '../../store/Order/order.action'
import { ORDER_CREATED_RESET } from '../../store/Order/order.types'

const ConfirmOrder = ({ paymentMethode, setShowModal }) => {




    const alert = useAlert()
    const dispatch = useDispatch()
    const { isCreated, loading, error: orderError } = useSelector(state => state.order)

    const items = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    const userInfo = localStorage.getItem('orderInfo') ? JSON.parse(localStorage.getItem('orderInfo')) : {};
    const cartInfo = sessionStorage.getItem('cartInfo') ? JSON.parse(sessionStorage.getItem('cartInfo')) : {};

    const submitOrder = () => {
        const orderDetails = {
            items,
            userInfo,
            paymentInfo: {
                methode: paymentMethode
            },
            delivery: cartInfo.delivery,
            subtotal: cartInfo.subtotal,
            tax: cartInfo.tax,
            total: cartInfo.total,
            totalItem: cartInfo.totalItem,
        }


        dispatch(createOrder(orderDetails))
    }

    useEffect(() => {
        if (orderError) {
            alert.error(orderError)
            dispatch(clearError())
        }

        if (isCreated) {
            // alert.success('order created  success')
            setShowModal(true)
            dispatch({ type: ORDER_CREATED_RESET })
        }
    }, [alert, orderError, dispatch, isCreated])



    return (
        <div className="place_order_container">
            <div className='bike_container'>
                <img className='img-fluid' src={bikeImg} alt="bike" />
            </div>
            <div className='white_bg'>
                <h5>Thank you for choose</h5>
                <h5 className='font-weight-bold'>Burger State Foods</h5>
            </div>
            <div className='mt-3 ml-2'>
                <h4 className='mb-0'>{new Date().toLocaleTimeString()}</h4>
                <h6 className='mt-0 mb-0'>{new Date().toDateString('dd/MM/yyyy')}</h6>
                <p>Estimated Delivery Time</p>
            </div>
            <div className='white_bg d-flex align-items-center'>
                <span className='helmet_container'>
                    <img className='img-fluid' src={helmet} alt="" />
                </span>
                <span>
                    <p className='font-weight-bold mb-0'>Tajul Islam Rifat</p>
                    <small>Your Rider</small>
                </span>
            </div>
            {
                paymentMethode ?
                    <button
                        type='submit'
                        className='w-100 mt-4 mb-2 btn'
                        onClick={submitOrder}
                        disabled={loading ? true : false}
                    >Confirm</button>
                    :
                    <button type='button' disabled className='mt-4 mb-2 w-100 disable_btn'>Chose payment methode !</button>
            }
        </div>
    );
};

export default ConfirmOrder;