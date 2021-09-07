import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import SideBar from '../../SideBar/SideBar';
import './newFood.css'

import { createAdminFood, adminErrorClear } from '../../../../store/Admin/admin.action'
import { ADMIN_CREATE_FOOD_RESET } from '../../../../store/Admin/admin.types'

const NewFood = () => {
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [part, setPart] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")

    const dispatch = useDispatch()
    const alert = useAlert()
    const { isCreated, loading, error } = useSelector(state => state.adminStatus)


    const foodSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData
        formData.append('name', name)
        formData.append('title', title)
        formData.append('part', part)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('food-image', image)

        dispatch(createAdminFood(formData))
    }




    useEffect(() => {

        if (error) {
            alert.error(error)
            dispatch(adminErrorClear())
        }

        if (isCreated) {
            alert.success('Done !')
            dispatch({ type: ADMIN_CREATE_FOOD_RESET })
            setName("")
            setTitle("")
            setPart("")
            setDescription("")
            setPrice("")
            setImage("")
        }

    }, [isCreated, error, dispatch, alert])


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
                                <form onSubmit={foodSubmit} >
                                    <div className="form-group">
                                        <label htmlFor="name">Food Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Food name"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="title">Food Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            placeholder="Food title"
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="category">Food category</label>
                                        <select
                                            name="category"
                                            id="category"
                                            className="form-control"
                                            onChange={(e) => setPart(e.target.value)}
                                        >
                                            <option defaultValue="Select menu">Select a category</option>
                                            <option>Breakfast</option>
                                            <option>Lunch</option>
                                            <option>Dinner</option>
                                            <option>Snacks</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="title">Food Description</label>
                                        <textarea
                                            className="form-control"
                                            id="exampleInput"
                                            rows="3"
                                            onChange={(e) => setDescription(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Food Price</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="food-image">Food Image</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) => setImage(e.target.files[0])}
                                        />
                                    </div>
                                    <button type="submit" className="btn-grad">Submit</button>
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
