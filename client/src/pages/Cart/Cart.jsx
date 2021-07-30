import { useState } from 'react';
import './cart.css'
import CheckCart from './CheckCart';
import DeliveryDetail from './DeliveryDetail';

const Cart = () => {

    const [isData, setIsData] = useState(false)

    return (
        <div className="cart container" >
            <div className="row">
                <div className="col-md-6 text-center">
                    <DeliveryDetail dataSaved={setIsData} />
                </div>
                <div className="col-md-6">
                    <CheckCart isData={isData} />
                </div>
            </div>
        </div>
    );
}

export default Cart;
