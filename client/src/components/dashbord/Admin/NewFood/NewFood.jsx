import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SideBar from '../../SideBar/SideBar';
import './newFood.css'

const NewFood = () => {
    return (
        <>
            <div className="admin-dashbord ">
                <div className="sidebar">
                    <SideBar />
                </div>
                <div className="newFood">
                    <div className="newFood-body">
                        <div className="card newFood-card">
                            <div className="card-body ">
                                <h1>Add New Food</h1>
                                <hr />
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewFood;
