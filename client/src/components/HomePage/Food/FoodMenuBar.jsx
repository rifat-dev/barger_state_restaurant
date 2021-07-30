import { useState } from 'react'
import { Link } from 'react-router-dom'
import './food.css'



const FoodMenuBar = ({ handleCategories }) => {

    const [classCat, setcCassCat] = useState('All')

    return (
        <div className="food-hader" >
            <nav className='container nav_item'>
                <ul>
                    <li onClick={() => { handleCategories('All'); setcCassCat('All') }}>
                        <Link to='' className={`nav_link ${classCat === 'All' ? 'active' : ''}`}>All</Link>
                    </li>
                    <li onClick={() => { handleCategories('Breakfast'); setcCassCat('Breakfast') }}>
                        <Link to='' className={`nav_link ${classCat === 'Breakfast' ? 'active' : ''}`}>Breakfast</Link>
                    </li>
                    <li onClick={() => { handleCategories('Lunch'); setcCassCat('Lunch') }}>
                        <Link to='' className={`nav_link ${classCat === 'Lunch' ? 'active' : ''}`}>Lunch</Link>
                    </li>
                    <li onClick={() => { handleCategories('Dinner'); setcCassCat('Dinner') }}>
                        <Link to='' className={`nav_link ${classCat === 'Dinner' ? 'active' : ''}`}>Dinner</Link>
                    </li>
                    <li onClick={() => { handleCategories('Snacks'); setcCassCat('Snacks') }}>
                        <Link to='' className={`nav_link ${classCat === 'Snacks' ? 'active' : ''}`}>Snacks</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default FoodMenuBar;
