import './userOrders.css'

import SideBar from '../../SideBar/SideBar'

const UserOrders = () => {
    return (
        <div>
            <div className="user-orders" >
                <div className="user-orders_sidebar">
                    <SideBar />
                </div>
                <div className="user-orders_body">
                    <h1>I am User orders</h1>
                </div>
            </div>
        </div>
    );
}

export default UserOrders;
