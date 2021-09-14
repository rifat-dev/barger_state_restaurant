
import './userDashbord.css'

import SideBar from '../../SideBar/SideBar'
const UserDashbord = () => {
    return (
        <div className="user-dashbord" >
            <div className="user-dashbord_sidebar">
                <SideBar />
            </div>
            <div className="user-dashbord_body text-center ">
                <h1>Comming soon</h1>
            </div>
        </div>
    );
}

export default UserDashbord;
