import { useLocation, useNavigate } from 'react-router';
import '../static/css/card.css'
import redirectApi from '../api/redirectApi';
import type coursesFormat  from '../contentData/dataFormat/coursesFormat'

function Card(props:coursesFormat) {
    const navigate = useNavigate();
    const location = useLocation();
   const navigateTocourse = ()=>{
        console.log(props.title);
        console.log(location.pathname)
        // if(location.pathname.includes('/courses')){
       const paths : string[] = location.pathname.split("/");
       console.log(paths)
       navigate( redirectApi(`/${paths[paths.length-1]}`,location.pathname, props.title) )
    }
    return (
        <div className='card-main' onClick={navigateTocourse}>
            <div className="card-container">
                <div className="card-front">
                    <p className='card-front-img'>{props.image}</p>
                    <p className='card-front-text'>{props.title}</p>
                </div>
                <div className="card-back">
                    <p className='card-back-text'>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card