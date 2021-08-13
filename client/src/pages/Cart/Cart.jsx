import { useState } from 'react';
import { useSelector } from 'react-redux'
import './cart.css'
import CheckCart from './CheckCart';
import DeliveryDetail from './DeliveryDetail';
import NotFound from '../NotFound/NotFound'


const Cart = () => {

    const [isData, setIsData] = useState(false)

    const { cartItems } = useSelector(state => state.cart)

    return (
        <>
            {
                cartItems.length > 0 ?
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
                    : <NotFound title={'Cart Is Empty'} />}
        </>
    );
}

export default Cart;
