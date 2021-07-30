
import loaderGif from '../../../assets/loader.gif'
import './loader.css'

const Loader = () => {
    return (
        <div className="loader" >
            <div className="loader_gif">
                <img src={loaderGif} alt="" />
            </div>
        </div>
    );
}

export default Loader;
