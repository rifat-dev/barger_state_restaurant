import { useState } from 'react';
import ConfirmOrder from './ConfirmOrder';
import './payment.css'
import PaymentForm from './PaymentForm';
const Payment = () => {
    const [paymentMethode, setPaymentMethode] = useState("")

    return (
        <div className="container my-lg-2">
            <div className="row">
                <div className="col-md-6">
                    <PaymentForm setPaymentMethode={setPaymentMethode} />
                </div>
                <div className="col-md-6">
                    <ConfirmOrder paymentMethode={paymentMethode} />
                </div>
            </div>
        </div>
    );
}

export default Payment;
