import './navbar.css'

// import Headroom from 'react-headroom';

import { Link } from 'react-router-dom';

{/* <Link to='about' spy={true} smooth={true}  offset={-50} duration={500}>About</Link> */}

const Navbar = () => {

  return (
    <div className="navbar">
        <div className="nav-menu">
            <ul>
              <li className=''>
                <Link to="/About">About</Link>
              </li>
              <li className=''>
                <Link to="/Work">Work</Link>
              </li>
              <li className=''>
                <Link to="/HireMe">Hire Me!</Link>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar