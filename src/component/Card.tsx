import { useNavigate } from 'react-router';
import '../static/css/card.css'

function Card(props) {
    const navigate = useNavigate();
   const navigateTocourse = ()=>{
        console.log(props.title);
        if(props.title === "Spring-boot1"){
            navigate(import.meta.env.VITE_SB_CONTENT);
        }
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