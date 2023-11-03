import './navbar.css'
import cclogo from '../../assets/cclogo.png'
import { useState } from 'react';
// import Headroom from 'react-headroom';
import { Link, useNavigate } from 'react-router-dom';

{/* <Link to='about' spy={true} smooth={true}  offset={-50} duration={500}>About</Link> */}



const Navbar = () => {

  const navigate = useNavigate()
  
  const [menuOpen, setMenuOpen] = useState(false)

  return (

    

    <div className="navbar">
        <div className="nav-menu">
            <div className="cclogo">
              <img onClick={() => navigate('/About')} src={cclogo}/>
            </div>
            <div onClick={() => {setMenuOpen(!menuOpen);}} className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            <ul className={menuOpen ? 'open' : ''}>
              <li className=''>
                <Link to="/About">About</Link>
              </li>
              <li className=''>
                <Link to="/Work">Work</Link>
              </li>
              <li className='hiremeBtn'>
                <Link to="/HireMe">Hire Me!</Link>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar