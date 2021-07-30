import React from 'react';
import SideBar from '../../SideBar/SideBar';

const AdminDashbord = () => {
    return (
        <>
            <div className="admin-dashbord">
                <div className="admin-dashbord_sidebar">
                    <SideBar />
                </div>
                <div className="admin-dashbord_body">
                    <h1>I am Admin Dashbord</h1>
                </div>
            </div>
        </>
    );
}

export default AdminDashbord;
