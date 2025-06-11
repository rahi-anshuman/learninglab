import '../static/css/card.css'

function Card() {
    return (
        <div className='card-main'>
        <div className="card-container">
            <div className="card">
                <div className="slide slide1">
                    <div className="icon">
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        <div className="slide slide2">
            <div className="content">

                <h3>Hello there</h3>
                <p>Trust urself and keep going</p>
            </div>

        </div>



        </div>
        </div>
    )
}

export default Card