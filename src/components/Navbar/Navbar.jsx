import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { HouseSimple } from 'phosphor-react'
function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='logo'>
          <p>Carles Noelle</p>
        </div>
        <div className='links'>
            <Link to='/'> Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Blogs'>Blogs</Link>
            <Link to='/Contact'>Contact</Link>
        </div>
    </nav>  
    </>
  )
}

export default Navbar
