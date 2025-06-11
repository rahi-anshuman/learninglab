import '../static/css/navbar.css'
import { navbar_logo } from '../utility/image'

function Navbar() {
  return (
    <div className='navbar-main'>
        <div className="navbar-image">
            <img src={navbar_logo} alt="" className='navbar-image-content'/>
            <p className='navbar-text'>AR</p>
        </div>
        <div className="navbar-menu">
            <ul className='navbar-menu-grp'>
                <li className='navbar-menu-grp-item  border-bottom-animation'>Home</li>
                <li className='navbar-menu-grp-item border-bottom-animation'>Topics</li>
                <li className='navbar-menu-grp-item border-bottom-animation'>About Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
