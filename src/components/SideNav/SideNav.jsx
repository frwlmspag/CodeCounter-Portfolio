import '../../components/SideNav/sidenav.css'
import { useState, useEffect } from 'react'
import Socials from '../About/Socials'

// AOS ANIMATION
import Aos from 'aos';
import 'aos/dist/aos.css'






const SideNav = () => {

  useEffect(()=> {
    Aos.init({duration: 500})
  }, [])

  const [show, setShow] = useState(false)
  const showContent = () => {
    if (window.scrollY >= 90){
      setShow(true);
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showContent);

    return () => {
      window.removeEventListener('scroll', showContent);
    };
  }, []);


  return (
    <div className="sidenav__container">
      <div className={show ? 'sidenav__contents' : 'sidenav__contents hidden'} data-aos={show ? 'fade-right' : ''}>
        <div className={show ? 'sidenav__socials' : 'hidden'}>
          <Socials/>
        </div>
      </div>
    </div>
  )
}

export default SideNav