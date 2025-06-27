import '../static/css/aboutus.css'
function AboutUs() {
    return (
        <div className='aboutus-main'>
            <ul className='aboutus-ul'>
                <li className='aboutus-li'>
                    <a href="#" className='aboutus-a'>
                        <i className="fab fa-facebook-f icon"></i>    </a>
                </li>
                <li className='aboutus-li'>
                    <a href="#" className='aboutus-a'><i className="fab fa-twitter icon"></i></a>
                </li>
                <li className='aboutus-li'>
                    <a href="#" className='aboutus-a'><i className="fab fa-linkedin-in icon"></i></a></li>
                <li className='aboutus-li'>
                    <a href="#"  className='aboutus-a'><i className="fab fa-google-plus-g icon"></i></a></li>
            </ul>
        </div>
    )
}

export default AboutUs