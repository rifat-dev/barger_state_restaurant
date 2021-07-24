import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

import './navbar.css'
import logo from '../../../assets/logo.png'

const NavBar = () => {

    const { isAuthenticate } = useSelector(state => state.auth)
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

                        {isAuthenticate &&
                            <Avatar alt="User" className="navbar-avatar" />
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
