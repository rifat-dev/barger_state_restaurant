import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './food.css'
import FoodCard from './FoodCard';
import FoodMenuBar from './FoodMenuBar';

import { getAllFoods } from '../../../store/Food/food.action'
import Loader from '../../layouts/loader/Loader';

const Food = () => {
    const [classCat, setcCassCat] = useState('All')
    const [filterFoods, setFilterFoods] = useState([])


    const { foods, loading } = useSelector(state => state.foods)
    const dispatch = useDispatch()


    const handleCategories = (value) => {
        setcCassCat(value)
    }

    useEffect(() => {
        const result = foods.filter(food =>
            food.part.toLowerCase().includes(classCat === 'All' ? '' : classCat.toLowerCase())
        )
        setFilterFoods(result)
    }, [classCat, foods])



    useEffect(() => {
        dispatch(getAllFoods())
    }, [])


    return (
        <>
            {
                !loading ?
                    <div className="food" >
                        <FoodMenuBar handleCategories={handleCategories} />
                        <div className="container">
                            <div className="food-container">
                                {filterFoods.map(food => (
                                    <FoodCard food={food} />
                                ))}
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <Loader />
                    </>

            }
        </>
    );
}

export default Food;