import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { OverlayTrigger, Popover, Button, Image } from 'react-bootstrap'


import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

import './navbar.css'
import logo from '../../../assets/logo.png'
import { userLogOut } from '../../../store/User/user.actions'

const NavBar = () => {

    const alert = useAlert()
    const dispatch = useDispatch()
    const { user, isAuthenticate } = useSelector(state => state.auth)


    const logOut = () => {
        dispatch(userLogOut())
        alert.success('User LogOut Success')
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light">

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
                            <Link to='/shop' className="navbar-item nav_text">
                                Dashbord
                            </Link>
                        }

                        <Link to="/cart" className="navbar-item navbar_cart">
                            <Badge badgeContent={1} color="secondary">
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
                                                className="py-0 px-1"
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
                            <Link to='/login' className="btn navbar-btn">
                                LogIn
                            </Link>
                        }

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
