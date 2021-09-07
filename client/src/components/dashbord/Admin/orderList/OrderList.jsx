import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';


import SideBar from '../../SideBar/SideBar'

import { adminErrorClear, getAdminOrders } from '../../../../store/Admin/admin.action'

const OrderList = () => {

    const dispatch = useDispatch()
    const { orders, loading, error } = useSelector(state => state.admin)



    useEffect(() => {
        dispatch(getAdminOrders())
    }, [])

    return (
        <div>
            <div className="user-orders" >
                <div className="user-orders_sidebar">
                    <SideBar />
                </div>
                <div className="user-orders_body">
                    <div className="user-orders_body-table ">
                        <div className="">
                            <Table bordered='1px' className="text-center" >
                                {/* striped bordered hover variant="dark" */}
                                <thead style={{ background: "#000", color: "#fff" }} >
                                    <tr>
                                        <th>NO</th>
                                        <th>Order Id</th>
                                        <th>Total Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((item, index) => (
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
        </div>
    );
}

export default OrderList;
