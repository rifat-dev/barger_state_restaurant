import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './food.css'
import FoodCard from './FoodCard';
import FoodMenuBar from './FoodMenuBar';

import { getAllFoods } from '../../../store/Food/food.action'
import Loader from '../../layouts/loader/Loader';

const Food = () => {
    const [index, setIndex] = useState(6)
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
                        <div className="food-hader">
                            <h6 className="tag">Specialties</h6>
                            <h2 className="title">
                                Our Menu
                            </h2>
                        </div>
                        <FoodMenuBar handleCategories={handleCategories} />
                        <div className="container">
                            <div className="row">
                                {filterFoods.slice(0, index).map(food => (
                                    <div className="col-lg-4 col-md-6 col-12" >
                                        <FoodCard food={food} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {index <= filterFoods.length &&
                            <div className="food-footer mt-4" style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
                                <button
                                    className="btn-grad"
                                    onClick={() => setIndex(index + 3)}
                                >Load more ....</button>
                            </div>
                        }
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
