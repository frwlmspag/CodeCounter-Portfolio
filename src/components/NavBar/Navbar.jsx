import './navbar.css'

import Headroom from 'react-headroom';

import { Link } from 'react-scroll';

const Navbar = () => {

  return (
    <div className="navbar">
      <Headroom className='headroom'>
        <div className="nav-menu">
            <ul>
              <li className='link'>
                <Link to='about' spy={true} smooth={true}  offset={-50} duration={500}>About</Link>
              </li>
              <li className='link'>Services</li>
              <li className='link'>Work</li>
              <li className='link'>Contact</li>
            </ul>
        </div>
      </Headroom>
    </div>


  )
}

export default Navbar