import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
     
        <div className="navbar_text">
     <div className='logo'>
     <h1>E_COMMERCE</h1>
     </div>
           <ul>
            <li> <a href="/Header">Home</a> </li>
            <li> <a href="/Menu">MENU</a> </li>
            <li> <a href="/About">ABOUT</a></li>
            <li> <a href="/Shop">SHOP</a></li>
            <li> <a href="/Partners">Partners</a></li>
           </ul>
        </div>
      
    </div>
  )
}

export default Navbar
