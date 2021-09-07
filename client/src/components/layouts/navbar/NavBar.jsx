import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { OverlayTrigger, Popover, Button, Image } from 'react-bootstrap'


import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

import './navbar.css'
import logo from '../../../assets/logo.png'
import { userLogOut } from '../../../store/User/user.actions'

const NavBar = () => {

    const history = useHistory()
    const alert = useAlert()
    const dispatch = useDispatch()
    const { user, isAuthenticate } = useSelector(state => state.auth)
    const { cartItems } = useSelector(state => state.cart)



    const logOut = () => {
        dispatch(userLogOut())
        alert.success('User LogOut Success')
        history.push('/')
    }

    return (

        <div>
            {/* <nav className="navbar navbar-expand-lg navbar-light">

                <div className="container">
                    <Link to='/' style={{ color: 'black' }} >
                        <img className="navbar-brand" src={logo} style={{ width: '80px', height: '80px' }} alt="Logo" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarContent">

                        <div className="navbar-nav align-items-center ms-auto" >
                            <Link to='/' className="navbar-item nav_text">
                                Home
                            </Link>


                            {isAuthenticate &&
                                <>
                                    {user.roal === 'admin' &&
                                        <Link to='/admin/dashbord' className="navbar-item nav_text">
                                            Dashbord
                                        </Link>
                                    }
                                    {user.roal === 'user' &&
                                        <Link to='/user/dashbord' className="navbar-item nav_text">
                                            Dashbord
                                        </Link>
                                    }
                                </>
                            }

                            <Link to="/cart" className="navbar-item navbar_cart">
                                <Badge badgeContent={cartItems.length} color="secondary">
                                    <ShoppingCartRoundedIcon />
                                </Badge>
                            </Link>

                            {
                                isAuthenticate &&
                                <OverlayTrigger trigger="click" placement="bottom" overlay={
                                    <Popover id="popover-positioned-bottom" className="mt-1">
                                        <div className="d-flex justify-content-center mt-2">
                                            <Image style={{ maxWidth: "60px" }} src={user.image} roundedCircle />
                                        </div>
                                        <Popover.Content>
                                            <strong className="text-center d-block">{user.name}</strong>
                                            <strong className="text-center d-block">{user.email}</strong>
                                            <div className="d-flex justify-content-center mt-1">
                                                <Button
                                                    onClick={logOut}
                                                    variant="outline-danger"
                                                    className="btn-grad"
                                                    size="sm">
                                                    Logout
                                                </Button>
                                            </div>
                                        </Popover.Content>
                                    </Popover>
                                } >
                                    <Avatar
                                        alt="User"
                                        style={{ maxWidth: "60px" }}
                                        className="navbar-avatar"
                                        src={user.image}
                                    />
                                </OverlayTrigger>
                            }


                            {!isAuthenticate &&
                                <Link to='/login' className="btn-grad">
                                    LogIn
                                </Link>
                            }

                        </div>
                    </div>
                </div>
            </nav> */}

            <nav className="nav-bar">
                <div className="nav-container">
                    <div className="nav-row">
                        <div className="nav-box">
                            <ul className="nav-ul" >
                                <li>
                                    <Link to='/' className="navLink"> Home </Link>
                                </li>
                                <li>
                                    <Link to='/about' className="navLink"> About </Link>
                                </li>
                                <li>
                                    <Link to='/menu' className="navLink"> Menu </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-box">
                            <Link to='/' style={{ color: 'black' }} >
                                <img className="navbar-brand" src={logo} style={{ width: '80px', height: '80px' }} alt="Logo" />
                            </Link>
                        </div>
                        <div className="nav-box">
                            <ul className="nav-ul" >
                                <li>
                                    <Link to='/team' className="navLink"> Team </Link>
                                </li>
                                <li>
                                    <Link to='/reservation' className="navLink"> Reservation </Link>
                                </li>
                                {isAuthenticate &&
                                    <li>
                                        {user.roal === 'admin' &&
                                            <Link to='/admin/dashbord' className="navLink ">
                                                Dashbord
                                            </Link>
                                        }
                                        {user.roal === 'user' &&
                                            <Link to='/user/dashbord' className="navLink">
                                                Dashbord
                                            </Link>
                                        }
                                    </li>
                                }
                            </ul>
                        </div>
                        <div className="nav-box">
                            <ul className="nav-ul" >
                                <li>
                                    <Link to="/cart" className="navbar_cart">
                                        <Badge badgeContent={cartItems.length} color="secondary">
                                            <ShoppingCartRoundedIcon />
                                        </Badge>
                                    </Link>
                                </li>

                                {!isAuthenticate &&
                                    <li>
                                        <Link to='/login' className="btn-grad">
                                            LogIn
                                        </Link>
                                    </li>
                                }

                                {
                                    isAuthenticate &&
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={
                                        <Popover id="popover-positioned-bottom" className="mt-1">
                                            <div className="d-flex justify-content-center mt-2">
                                                <Image style={{ maxWidth: "60px" }} src={user.image} roundedCircle />
                                            </div>
                                            <Popover.Content>
                                                <strong className="text-center d-block">{user.name}</strong>
                                                <strong className="text-center d-block">{user.email}</strong>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <Button
                                                        onClick={logOut}
                                                        variant="outline-danger"
                                                        className="btn-grad"
                                                        size="sm">
                                                        Logout
                                                    </Button>
                                                </div>
                                            </Popover.Content>
                                        </Popover>
                                    } >
                                        <Avatar
                                            alt="User"
                                            style={{ maxWidth: "60px" }}
                                            className="navbar-avatar"
                                            src={user.image}
                                        />
                                    </OverlayTrigger>
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>


    );
}

export default NavBar;
