import { useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './sidebar.css'

const SideBar = () => {
    const { user } = useSelector(state => state.auth)

    let location = useLocation()

    let [, parent, path] = location.pathname.split('/')


    // useEffect(() => {
    //     let sideBarContainer = document.getElementById("sidebar_menu")
    //     let sideBarItems = sideBarContainer.getElementsByClassName("sidebar_menu-item")
    //     console.log(sideBarItems)
    //     console.log(document.getElementsByClassName('active-item')[0])
    //     for (let i = 0; i < sideBarItems.length; i++) {
    //         sideBarItems[i].addEventListener("click", function () {
    //             var currentItem = document.getElementsByClassName('active-item')
    //             if (currentItem.length > 0) {
    //                 currentItem[0].className = currentItem[0].className.replace('active-item', ' ')
    //             }
    //             this.className += ' active-item'
    //         })
    //     }
    // })



    return (
        <div className="sidebar" id='sidebar' >
            <div className="sidebar_hader">
                <h4>{user.name}</h4>
                <p>@{user.roal}</p>
            </div>
            <hr className="sidebar_hr" />

            <div id="sidebar_menu">

                {/* admin navbar item */}
                {
                    parent === "admin" &&
                    <>
                        <Link to='/admin/dashbord' className="sidebar_menu-link" >
                            <div className="active-item sidebar_menu-item sidebar_menu-item-admin">
                                <li className="bi bi-grid-1x2-fill" ></li>
                                Dashbord
                            </div>
                        </Link>

                        <Link to='/admin/order-list' className="sidebar_menu-link">
                            <div className="sidebar_menu-item sidebar_menu-item-admin">
                                <li className="bi bi-cart-plus-fill"></li>
                                Order Lists
                            </div>
                        </Link>

                        <Link className="sidebar_menu-link">
                            <div className="sidebar_menu-item sidebar_menu-item-admin" >
                                <li className="bi bi-card-checklist">
                                </li>
                                Foods
                            </div>
                        </Link>

                        <Link className="sidebar_menu-link">
                            <div className="sidebar_menu-item sidebar_menu-item-admin">
                                <li className="bi bi-plus-square-fill"></li>
                                New Food
                            </div>
                        </Link>

                        <Link className="sidebar_menu-link">
                            <div className="sidebar_menu-item sidebar_menu-item-admin">
                                <li className="bi bi-plus-square-fill"></li>
                                Reviews
                            </div>
                        </Link>
                    </>

                }


                {/* user navbar item */}

                {
                    parent === "user" &&
                    <>
                        <Link to='/user/dashbord' className="sidebar_menu-link">
                            <div className={path === "dashbord" ? "active-item sidebar_menu-item" : "sidebar_menu-item"} >
                                <li className="bi bi-grid-1x2-fill" ></li>
                                Dashbord
                            </div>
                        </Link>

                        <Link to='/user/orders' className="sidebar_menu-link">
                            <div className={path === "orders" ? "active-item sidebar_menu-item" : "sidebar_menu-item"} >
                                <li className="bi bi-cart-plus-fill"></li>
                                Orders
                            </div>
                        </Link>

                        <Link className="sidebar_menu-link">
                            <div className={path === "review" ? "active-item sidebar_menu-item" : "sidebar_menu-item"}>
                                <li className="bi bi-plus-square-fill"></li>
                                Review
                            </div>
                        </Link>

                    </>
                }



            </div>
        </div>
    );
}

export default SideBar;
