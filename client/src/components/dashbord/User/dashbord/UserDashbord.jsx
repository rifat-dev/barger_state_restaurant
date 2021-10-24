import axios from 'axios'
import { useState, useEffect } from "react"
import './userDashbord.css'

import SideBar from '../../SideBar/SideBar'
const UserDashbord = () => {
    const [obj, setObj] = useState({})
    const { totalOrders, totalSpend, ordersPanding } = obj
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        async function getDashbord() {
            try {
                setLoading(true)
                const { data } = await axios.get("/api/user/dashbord")
                setObj(data)
                setLoading(false)
            } catch (error) {
                console.log(error.response.data.message)
            }
        }
        getDashbord()
    }, [])


    return (
        <div className=" user-dashbord" >
            <div className="user-dashbord_sidebar">
                <SideBar />
            </div>
            <div className="container user-dashbord_body text-center mt-5">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div class="card text-white bg-dark mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Total Amount Spend</h5>
                                <p class="card-text">{`$ ${totalSpend && totalSpend}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div class="card text-white bg-primary mb-3 py-5">
                            <div class="card-body">
                                <h5 class="card-title">Total Order</h5>
                                <p class="card-text">{totalOrders && totalOrders}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div class="card text-white bg-success mb-3 py-5" >
                            <div class="card-body">
                                <h5 class="card-title">Panding Orders</h5>
                                <p class="card-text">{ordersPanding && ordersPanding}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default UserDashbord;
