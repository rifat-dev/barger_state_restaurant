import { useSelector } from 'react-redux'

import Hader from '../../components/HomePage/Hader/Hader'
import About from '../About/About'
import Team from '../Team/Team'
import Reservation from '../Reservation/Reservation'
import Blog from '../../components/HomePage/Blog/Blog'
import Food from '../../components/HomePage/Food/Food'
import Review from '../../components/HomePage/Reviews/Review'


const Home = () => {

    return (
        <>
            <Hader />
            <About />
            <Food />
            <Review />
            <Blog />
            <Team />
            <Reservation />
        </>
    );
}

export default Home;
