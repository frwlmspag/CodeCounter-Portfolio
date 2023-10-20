import './about.css'


// import Typewriter from 'typewriter-effect';
import Typewriter from 'typewriter-effect';


// LOTTIE ANIMATION
import Lottie from 'lottie-react';
import CCanimation from '../../assets/cclogo-animation.json'


// ASSETS
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkin from '../../assets/linkin.png'
import Twitter from '../../assets/twitter.png'
import Line from '../../assets/Line.png'
import OwnerImg from '../../assets/OwnerImg.png'

import Html from '../../assets/tech/html.svg'
import Css from '../../assets/tech/css.svg'
import Js from '../../assets/tech/javascript.svg'
import Rjs from '../../assets/tech/reactjs.svg'
import Tcss from '../../assets/tech/tcss.svg'
import Gh1 from '../../assets/tech/github1.svg'




const About = () => {


  return (
    <div className="about">
      <div className="about-container">
        <div className='lineContainer'>
          <img src={ Line } className='line'/>
        </div>
        <div className="Firstabout-container">
          <div className="logo-container"> 
            <Lottie animationData={ CCanimation } className='lottie__Logo'/>
          </div>
          <div className="intro-container">
            <div className="text-con-1">
              <div className="text-con-1-1">
                <h2> Hey there!</h2>

                <span>
                  <Typewriter
                    options={{
                      strings: ['I\'m Wilmar'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
                <h2>also known as Code Counter. I love creating awesome websites!</h2>
              </div>
              <div className="text-con-1-2">
                <h2>Connect with me</h2>
                <div className="socialICons">
                  <a href="https://github.com/ImCodeCounter" target="_blank" rel="noopener noreferrer">
                    <img src={Github}/>
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram}/>
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <img src={Linkin}/>
                  </a>
                  <a href="https://twitter.com/frwlmspag" target="_blank" rel="noopener noreferrer">
                    <img src={Twitter}/>
                  </a>
                </div>
              </div>
              <div className="text-con-1-3">
                <h2>Ready to start a project?</h2>
                <h2>Hit me up!</h2>
              </div>
              <button className='hireBtn'>Hire me!</button>
            </div> 
          </div>
        </div>
        <div className="Secondabout-Container">
          <div className="techOwner__Container" data-aos="fade-left">
            <div className="owner__Img">
              <img src= { OwnerImg } />
              <h1>-me</h1>
            </div>
            <div className="tech__Con">
              <h1>In the realm of web development, I excel in:</h1>
              <div className="tech__Stack">
                <div className="techStack__Con">
                  <img src= { Html } className='tech__Html'/>
                  <img src= { Css } className='tech__Css'/>
                  <img src= { Js } className='tech__Js'/>
                  <img src= { Rjs } className='tech__Rjs'/>
                  <img src= { Tcss } className='tech__Tcss'/>
                  <img src= { Gh1 } className='tech__Gh1'/>
                </div>
              </div>
            </div>
          </div>
          <div className="des__Container">

          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
