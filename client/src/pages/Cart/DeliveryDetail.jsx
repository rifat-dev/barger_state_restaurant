import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { saveDeliveryInfo } from '../../store/Cart/cart.action'

const DeliveryDetail = ({ dataSaved }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState("")
    const [village, setVillage] = useState("")
    const [city, setCity] = useState("")
    const [number, setNumber] = useState("")
    const [description, setDescription] = useState("")




    const dispatch = useDispatch()
    const { user, isAuthenticate } = useSelector(state => state.auth)
    const { orderInfo } = useSelector(state => state.cart)

    const onSubmit = (e) => {
        e.preventDefault()

        const details = {
            name: name,
            email: email,
            village: village,
            city: city,
            number: number,
            description: description
        }

        dispatch(saveDeliveryInfo(details));
        dataSaved(true);

    };

    useEffect(() => {
        console.log()
        if (Object.keys(orderInfo).length > 0) {
            setVillage(orderInfo.village)
            setCity(orderInfo.city)
            setNumber(orderInfo.number)
            setDescription(orderInfo.description)
            dataSaved(true);
        }
    }, [])


    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
        }
    }, [user])

    return (
        < >
            <h5>Delivery Detail</h5>
            <hr />
            <form onSubmit={onSubmit} >
                <div className="form-group">
                    <input
                        type="text"
                        name='name'
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control shipping_input"
                        placeholder="Full Name"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name='email'
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control shipping_input"
                        placeholder="Email" />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name='address1_village'
                        defaultValue={village}
                        onChange={(e) => setVillage(e.target.value)}
                        className="form-control shipping_input"
                        placeholder="Village/ Road No/ House No" />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name='address2_city'
                        defaultValue={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="form-control shipping_input"
                        placeholder="City/ Town" />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        name='phone'
                        defaultValue={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="form-control shipping_input"
                        placeholder="Phone Number" />
                </div>
                <div className="form-group">
                    <textarea
                        name='description'
                        defaultValue={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control shipping_input"
                        placeholder='Description(Optional)' rows="4" />
                </div>
                {
                    isAuthenticate ?
                        <button type="submit" className="w-100 form_submit_btn btn">Save & Continue</button>
                        :

                        <p>
                            Please LogIn For Make Order !
                            <Link to='/login' >LogIn</Link>
                        </p>

                }
            </form>
        </>
    );
}

export default DeliveryDetail;
