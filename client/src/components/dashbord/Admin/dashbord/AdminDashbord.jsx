import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SideBar from '../../SideBar/SideBar';
import './dashbord.css'

import {
    getAdminFoods,
    getAdminOrders,
    getAdminUsers,
    adminErrorClear
} from '../../../../store/Admin/admin.action'

const AdminDashbord = () => {

    const [totalAmount, setTotalAmount] = useState(0)
    const [panding, setPainding] = useState(0)

    const dispatch = useDispatch()

    const { orders, users, foods, loading, error } = useSelector(state => state.admin)



    useEffect(() => {
        let total = 0
        total = orders.reduce((acc, item) => acc + item.total, 0)
        setTotalAmount(total)

        let sum = 0;
        orders.map(item => {
            if (item.orderStatus === "Received") {
                sum++;
            }
        })

        setPainding(sum)
    }, [orders])

    useEffect(() => {

    })


    useEffect(() => {
        dispatch(getAdminFoods())
        dispatch(getAdminOrders())
        dispatch(getAdminUsers())
    }, [])

    return (
        <>
            <div className="admin-dashbord">
                <div className="admin-dashbord_sidebar">
                    <SideBar />
                </div>
                <div className="admin-dashbord_body">
                    <div className="dashbord">
                        <div className="row" >

                            <div className="col-xl-12 col-sm-12 mb-3">
                                <div className="card text-white bg-primary o-hidden h-100">
                                    <div className="card-body">
                                        <div className="text-center card-font-size">Total Amount<br /> <b>${totalAmount}</b>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-sm-6  mb-3">
                                <div className="card text-white bg-success o-hidden h-100">
                                    <div className="card-body">
                                        <div className="text-center card-font-size">Foods<br /> <b>{foods && foods.length}</b></div>
                                    </div>
                                    <Link className="card-footer text-white clearfix small z-1" to="">
                                        <span className="float-left">View Details</span>
                                        <span className="float-right">
                                            <i className="fa fa-angle-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>


                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="card text-white bg-danger o-hidden h-100">
                                    <div className="card-body">
                                        <div className="text-center card-font-size">Orders<br /> <b>{orders && orders.length}</b></div>
                                    </div>
                                    <Link className="card-footer text-white clearfix small z-1" to="">
                                        <span className="float-left">View Details</span>
                                        <span className="float-right">
                                            <i className="fa fa-angle-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>


                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="card text-white bg-info o-hidden h-100">
                                    <div className="card-body">
                                        <div className="text-center card-font-size">Users<br /> <b>{users && users.length}</b></div>
                                    </div>
                                    <Link className="card-footer text-white clearfix small z-1" to="">
                                        <span className="float-left">View Details</span>
                                        <span className="float-right">
                                            <i className="fa fa-angle-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>


                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="card text-white bg-warning o-hidden h-100">
                                    <div className="card-body">
                                        <div className="text-center card-font-size">Painding Orders<br /> <b>{panding}</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashbord;
