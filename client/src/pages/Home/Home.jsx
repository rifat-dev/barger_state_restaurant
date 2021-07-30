import { useSelector } from 'react-redux'

import Hader from '../../components/HomePage/Hader/Hader'
import Blog from '../../components/HomePage/Blog/Blog'
import Food from '../../components/HomePage/Food/Food'


const Home = () => {

    return (
        <>
            <Hader />
            <Food />
            <Blog />
        </>
    );
}

export default Home;
