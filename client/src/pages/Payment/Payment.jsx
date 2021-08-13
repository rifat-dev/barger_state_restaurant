import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import ConfirmOrder from './ConfirmOrder';
import './payment.css'
import successImg from '../../assets/success.gif'
import PaymentForm from './PaymentForm';
const Payment = () => {

    const [showModal, setShowModal] = useState(false)
    const [paymentMethode, setPaymentMethode] = useState("")
    const history = useHistory()

    const modalClose = () => {
        setShowModal(false)
        history.push('/user/orders')
    }

    return (
        <div className="container my-lg-2">
            <div className="row">
                <div className="col-md-6">
                    <PaymentForm setPaymentMethode={setPaymentMethode} />
                </div>
                <div className="col-md-6">
                    <ConfirmOrder paymentMethode={paymentMethode} setShowModal={setShowModal} />
                </div>
            </div>
            {showModal &&
                <div className="h-50" >
                    <Modal
                        show={showModal}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header >
                            <Modal.Title id="contained-modal-title-vcenter">
                                Thanks For Your Order.
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="w-100  text-center">
                                <img src={successImg} alt="" className="w-25 ms-auto" />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn" onClick={modalClose} >Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            }
        </div>
    );
}

export default Payment;
