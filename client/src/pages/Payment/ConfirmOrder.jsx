import React from 'react';
import bikeImg from '../../assets/bike.png';
import helmet from '../../assets/halmet.png';

const ConfirmOrder = ({ paymentMethode }) => {

    return (
        <div className="place_order_container">
            <div className='bike_container'>
                <img className='img-fluid' src={bikeImg} alt="bike" />
            </div>
            <div className='white_bg'>
                <h5>Thank you for choose</h5>
                <h5 className='font-weight-bold'>Red Onion Foods</h5>
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
                    <button type='submit' className='w-100 mt-4 mb-2 btn'>Confirm</button>
                    :
                    <button type='button' disabled className='mt-4 mb-2 w-100 disable_btn'>Chose payment methode !</button>
            }
        </div>
    );
};

export default ConfirmOrder;