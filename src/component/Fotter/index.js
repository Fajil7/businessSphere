import React from 'react'

import './index.css'
import { Link } from 'react-router-dom'

function Footer() {
    return(
		<footer className="footer">
		<div className="footer-container">
		  <div className="footer-section">
		 	 <img 
				src="https://businesssphere.info/uploads/web_photo_upload/171610104193261.png"
				class="logo-footer"                
            />
		  </div>
		  <div className="footer-section">
			<h4 className='h4-heading'>Useful Links</h4>
			<div className='footer-items'>
			<ul>
			  <li><Link to="/" className='link-item'>Home</Link></li>
			  <li><Link to="/about" className='link-item'>About</Link></li>
			  <li><Link>Directory</Link></li>
			  <li><Link to="/contact" className='link-item'>Contact us</Link></li>
			</ul>
			<ul className='secound-item-container'>
			  <li><Link to="/faq" className='link-item'>FAQ</Link></li>
			  <li><Link to="">Listing Form</Link></li>
			  <li><Link to="/about" className='link-item'>Our Process</Link></li>
			  <li><Link to="/" className='link-item'>Why Choose Us</Link></li>
			</ul>
			</div>
		  </div>
		  <div className="footer-section">
			<h4 className='mobile-view-margin'>Contact Us</h4>
			<p className='mobile-view-margin'>Email: sskjha2016@gmail.com</p>
			<p className='mobile-view-margin'>Phone: +91-85 82 84 84 34</p>
		  </div>
		</div>
		<div className="footer-bottom">
		  <p>&copy; 2024 Your Company. All rights reserved.</p>
		</div>
	  </footer>
    )
}

export default Footer