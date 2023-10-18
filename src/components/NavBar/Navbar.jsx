import './navbar.css'

import Headroom from 'react-headroom';


const Navbar = () => {
  return (
    <div className="navbar">
      <Headroom className='headroom'>
        <div className="nav-menu">
            <ul>
              <li className='link'>About</li>
              <li className='link'>Services</li>
              <li className='link'>Work</li>
              <li className='link'>Hire Me!</li>
            </ul>
        </div>
      </Headroom>
    </div>


  )
}

export default Navbar