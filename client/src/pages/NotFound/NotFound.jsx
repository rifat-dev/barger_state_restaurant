import './notFound.css'
import burgar from '../../assets/burgar.gif'

const NotFound = ({ title }) => {
    return (
        <div className="notFound" >
            <div className="notFound-inner">
                <img src={burgar} alt="" />
                <button className="btn">{title}</button>
            </div>
        </div>
    );
}

export default NotFound;
