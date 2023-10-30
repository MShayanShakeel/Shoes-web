import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import Shop from './Shop'
import Partners from './Partners'

const Header = () => {
  return (
   
    <div className='Banner'>
       <Navbar/>
      <div className="Banner_contain">
        <div className='container'>
          <div className="Banner_text">
          <h3>Our Biggest Sales</h3>
          <h1> 50% off Every Item</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dicta,
            adipisicing elit. Saepe dicta,</p>
            <div className='btn1'>
              <a href="" className='btnfirst'>Offers</a>
            </div>
          </div>
        </div>
      </div>
      
      <Shop/>
      <Menu/>
    </div>
   
  )
}

export default Header
