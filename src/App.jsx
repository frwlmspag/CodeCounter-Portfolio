import './App.css'
// import { Routes, Route, Link, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

// components
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'

// Pages
import About from './pages/About/About'
import Work from './pages/Work/Work'
import HireMe from './pages/Hire Me/HireMe'



function App() {
  return (
    <div className='Main'>
      <div className='NavBar'>
        <Navbar/>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/About'element={<About />}/>
            <Route path='/HireMe'element={<HireMe />}/>
            <Route path='/Work'element={<Work />}/>
          </Routes>
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </div>
  )
}

export default App
