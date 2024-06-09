import React from 'react'
import logo from '../images/logo.png'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-sec-1'>
            <div className="logo"><img src={logo} alt="logo" /></div>
            <div className='navitems'>
                <ul>
                    <li className='active'>Home</li>
                    <li>About Us</li>
                    <li>Pricing</li>
                    <li>Features</li>
                </ul>
            </div>
        </div>
        <div className=' navbar-sec-2 '><button className='blackBtn'>Download</button></div>
    </nav>
  )
}

export default Navbar
