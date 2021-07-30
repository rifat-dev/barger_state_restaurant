import { useState } from 'react';

const PaymentForm = ({ setPaymentMethode }) => {
    const [hasPayment, setHasPayment] = useState(null);

    const handleIsCashOn = value => {
        setHasPayment(value);
        if (value) {
            setPaymentMethode('Cash On Delivery');
        }
        if (!value) {
            setPaymentMethode({});
        };
    };

    return (
        <div className='w-75'>
            <h5>Payment Detail</h5>
            <hr />
            <div className='text-left'>
                <input className='mr-2' onClick={() => handleIsCashOn(true)} type="radio" name="payment" value='Cash On Delivery' id="cashOn" />
                <label htmlFor="cashOn">Cash On Delivery</label><br />
                <input className='mr-2' onClick={() => handleIsCashOn(false)} type="radio" name="payment" value='Credit Card' id="credit" />
                <label htmlFor="credit">Credit Card</label>
            </div>
            {
                hasPayment === false &&
                <>
                    <p className='text-left'>
                        <strong style={{ color: 'red' }}>Warning: </strong>
                        <small>This payment method is only for testing purpose. You can test it by using<br />
                            <strong>Card Number:</strong> 4242 4242 4242 4242 <br />
                            <strong>Expiration date:</strong> Any upcoming Month and Year.<br />
                            <strong>CVC:</strong> 145<br />this data.
                        </small>
                    </p>
                    {/* <Elements stripe={stripePromise}>
                        <CreditCardForm setPaymentData={setPaymentData} />
                    </Elements> */}
                </>
            }
        </div>
    );
};

export default PaymentForm;