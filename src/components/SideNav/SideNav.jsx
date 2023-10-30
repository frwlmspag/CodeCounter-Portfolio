import '../../components/SideNav/sidenav.css'
import { useEffect } from 'react'
import Socials from '../../assets/Socials'

import KoFi from '../../assets/kofi.png'

// AOS ANIMATION
import Aos from 'aos';
import 'aos/dist/aos.css'


const SideNav = () => {

  useEffect(()=> {
    Aos.init({duration: 500})
  }, [])

  // const [show, setShow] = useState(false)
  // const showContent = () => {
  //   if (window.scrollY >= 90){
  //     setShow(true);
  //   } else {
  //     setShow(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', showContent);

  //   return () => {
  //     window.removeEventListener('scroll', showContent);
  //   };
  // }, []);


  return (
    <div className="sidenav__container">
      <div className="left__container">
        <div className='sidenav__contents' data-aos='fade-right'>
          <div className='sidenav__socials'>
            <Socials/>
          </div>
        </div>
      </div>

      <div className="right__container">
      <div className='right__sidenav__contents'>
        <div className="ko-fi">
          <a href="https://ko-fi.com/imcodecounter" target="_blank" rel="noopener noreferrer">
            <img src={KoFi}/>
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SideNav