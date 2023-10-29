import './App.css'


// components
import Navbar from './components/NavBar/Navbar'
import About from './components/About/About'
import SideNav from './components/SideNav/SideNav'

function App() {

  

  return (
    <div className='Main'>
      <div className='NavBar'>
        <Navbar/>
      </div>
      <div className="SideNav">
          <SideNav/>
      </div>
      <div className="About">
        <About/>
      </div>
    </div>
  )
}

export default App
