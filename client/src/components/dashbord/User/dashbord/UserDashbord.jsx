
import './userDashbord.css'

import SideBar from '../../SideBar/SideBar'
const UserDashbord = () => {
    return (
        <div className="user-dashbord" >
            <div className="user-dashbord_sidebar">
                <SideBar />
            </div>
            <div className="user-dashbord_body">
                <h1>I am User Dashbord</h1>
            </div>
        </div>
    );
}

export default UserDashbord;
