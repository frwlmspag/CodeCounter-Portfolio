import './App.css'


// components
import Navbar from './components/NavBar/Navbar'
import About from './components/About/About'
import Services from './components/Services/Services'

function App() {

  

  return (
    <div className='Main'>
      <div className='NavBar'>
        <Navbar></Navbar>
      </div>
      <div className="About">
        <About></About>
      </div>
      <div className="Services">
        <Services></Services>
      </div>
    </div>
  )
}

export default App
