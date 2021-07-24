import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Resizer from "react-image-file-resizer";

import './register.css'

import registerPageImage1 from '../../assets/register_1.png'
import registerPageImage2 from '../../assets/register_2.png'
import logo from '../../assets/logo.png'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [avatar, setAvatar] = useState("")
    const [avatarPreview, setPreview] = useState("")


    const fileUploader = (e) => {
        const file = e.target.files[0];
        Resizer.imageFileResizer(
            file,
            300,
            300,
            "JPEG",
            100,
            0,
            (uri) => {
                setAvatar(uri)
                setPreview(uri)
            },
            "base64"
        );
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log({
            name,
            email,
            password,
            avatar
        })
    }

    return (
        <div className="register row" >
            <div className="col-md-6 register-col">
                <div className="register-col_left">
                    <img className="register-col_left-image-1" src={registerPageImage1} alt="Food " />
                    <img className="register-col_left-image-2" src={registerPageImage2} alt="Food " />
                </div>
            </div>
            <div className="col-md-6 register-col">
                <div className="register-col_right">
                    <img className="register-col_right-img" src={logo} alt="Logo" />
                    <form onSubmit={submitForm} className="register-col_right-form" >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                id="password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="avatar">Profile Image</label>
                            <input
                                type="file"
                                name="avatar"
                                className="form-control"
                                id="avatar"
                                onChange={fileUploader}
                            />
                        </div>
                        <button type="submit" className="btn mt-2  register-col_right-btn">Register</button>
                        <p className="text-center " >All Ready Have an Account?
                            <span> <Link className="link" to='/login' > Login</Link></span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
