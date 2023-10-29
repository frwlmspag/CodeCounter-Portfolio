import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkin from '../../assets/linkin.png'
import Twitter from '../../assets/twitter.png'

const AboutSocials = () => {
  return (
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
  )
}

export default AboutSocials