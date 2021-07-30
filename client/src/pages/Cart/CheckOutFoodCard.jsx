import { useSelector, useDispatch } from 'react-redux'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';

import { removeToCart, addToCart } from '../../store/Cart/cart.action'

const CheckCartCard = ({ fdDetail }) => {

    const dispatch = useDispatch()

    return (
        <div className="mt-0 mb-3 pt-2 pb-2 text-center checkout-food-card" >
            <p
                className='mt-0 delete_btn'
                onClick={() => dispatch(removeToCart(fdDetail._id))}
            >
                <ClearIcon />
            </p>
            <div className="d-flex  justify-content-between  align-items-center pl-3">
                <img style={{ width: '70px', height: '70px', borderRadius: '50%' }} className='mr-3 card-img' src={fdDetail.image} alt="clientPic" />
                <div className='text-left'>
                    <h5>{fdDetail.name}</h5>
                    <h3 className="checkout-food-card_price">${fdDetail.price}</h3>
                </div>
                <div className="d-flex align-items-center">
                    <p className='latestQuantity'
                        onClick={() => dispatch(addToCart(fdDetail._id, fdDetail.quantity - 1))}
                    >
                        <RemoveIcon />
                    </p>

                    <span className='count_number'>{fdDetail.quantity}</span>
                    <p className='latestQuantity'
                        onClick={() => dispatch(addToCart(fdDetail._id, fdDetail.quantity + 1))}
                    >
                        <AddIcon
                        />
                    </p>

                </div>
            </div>
        </div>
    );
}

export default CheckCartCard;
