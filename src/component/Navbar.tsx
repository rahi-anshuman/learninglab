import { NavLink } from 'react-router-dom'
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
                <li className='navbar-menu-grp-item  border-bottom-animation'><NavLink className='navlink' to='/learninglab'>Home</NavLink></li>
                <li className='navbar-menu-grp-item border-bottom-animation'><NavLink  className='navlink' to = '/learninglab/courses'>Topics</NavLink></li>
                <li className='navbar-menu-grp-item border-bottom-animation'><NavLink className='navlink' to= '/learninglab/about-us' >About Us</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
