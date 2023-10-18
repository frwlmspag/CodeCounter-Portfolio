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



const About = () => {

  return (
    <div className="about">
      <div className="about-container">
        <div className='lineContainer'>
          <img src={ Line } className='line'/>
        </div>
        <div className="Firstabout-container">
          <div className="logo-container"> 
            <Lottie animationData={ CCanimation } />
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
      </div>
    </div>
  )
}

export default About;
