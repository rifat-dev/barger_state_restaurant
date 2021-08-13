import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import './userOrders.css'

import SideBar from '../../SideBar/SideBar'

import { clearError, getMyOrders } from '../../../../store/Order/order.action'

const UserOrders = () => {

    const dispatch = useDispatch()
    const { orders: myOrders, loading, error } = useSelector(state => state.myOrders)



    useEffect(() => {
        dispatch(getMyOrders())
    }, [])

    return (
        <div>
            <div className="user-orders" >
                <div className="user-orders_sidebar">
                    <SideBar />
                </div>
                <div className="user-orders_body">
                    <div className="user-orders_body-table ">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>NO</th>
                                    <th>Order Id</th>
                                    <th>Total Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myOrders.map((item, index) => (
                                    <>
                                        <tr key={item._id} >
                                            <td>{index + 1}</td>
                                            <td>{item._id}</td>
                                            <td>{item.total}</td>
                                            <td
                                                className={
                                                    item.orderStatus.toLowerCase() === 'received' ?
                                                        'received' : item.orderStatus.toLowerCase() === 'processing' ?
                                                            'processing' : 'done'
                                                }
                                            >
                                                {item.orderStatus}
                                            </td>
                                            <td>
                                                <button className="btn-sm table-btn">
                                                    <VisibilityIcon />
                                                </button>
                                                <button className="btn-sm table-btn">
                                                    <DeleteIcon />
                                                </button>

                                            </td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserOrders;
