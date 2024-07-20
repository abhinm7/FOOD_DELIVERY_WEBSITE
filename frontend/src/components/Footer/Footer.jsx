import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere dolor corporis excepturi libero nam ullam dolore labore veniam possimus eligendi, ducimus maxime magnam. Architecto provident rem aspernatur nihil ipsa?</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
           <ul>
            <li>+1-212-4328765</li>
            <li>contact@tomato.com</li>
           </ul>
        
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2024 C tomato.com All rights reserved.
      </p>
      </div>
  )
}

export default footer