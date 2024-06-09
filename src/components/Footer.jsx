import React from 'react'
import logo from '../images/logo.png'
import mail from '../images/mail.svg'
import phone from '../images/phone.svg'
const Footer = () => {
    return (
<>



        <footer>
            <div className='footer flex-row'>
                <div className='flex-col'>
                    <div> <img src={logo} alt="" /></div>
                    <div className='flex-row'><img src={mail} alt="" /><a href='#'>help@frybix.com</a></div>
                    <div className='flex-row'><img src={phone} alt="" /> <a href='#'>+1234567890</a></div>
                </div>
                <div className='flex-col'>
                    <h3>Links</h3>

                    <a href='#'>Home</a>
                    <a href='#'>About Us</a>
                    <a href='#'>Bookings</a>
                    <a href='#'>Blog</a>

                </div>
                <div className='flex-col'>
                    <h3>Legal</h3>


                    <a href='#'>Terms of Use</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Cookie Policy</a>

                </div>
                <div className='flex-col'>
                    <h3>Product</h3>


                    <a href='#'>Take Tour</a>
                    <a href='#'>Live Chat</a>
                    <a href='#'>Reviews</a>

                </div>
                <div className='flex-col'>
                    <h3>Newletter</h3>
                    <a href='#'>Stay up to date</a>
                </div>
                <div className='subscribe'>
                    <button className='blackBtn'>Subscribe</button>
                </div>
            </div>

          
        </footer>

        <hr  className='fade-hr'/>


        <p className='copyright'>Copyright 2022 uifry.com all rights reserved</p>
</>
    )
}

export default Footer
