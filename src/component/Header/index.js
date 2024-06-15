import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav class="navbar navbar-expand-lg nav-bar">
    <div class="container-fluid">
      <Link to="/">
      <a class="navbar-brand" href='#'>
        <img src='https://businesssphere.info/uploads/web_photo_upload/171610104193261.png'
        className='logo'
        alt='logo'
      />
      </a>
      </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse un-list" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/" className='link-item'><a class="nav-link active" aria-current="page">Home</a></Link>
          </li>
          <li class="nav-item">
            <Link to="/listing" className='link-item'><a class="nav-link" href="">Driectory Listing Form</a></Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Driectory</a>
          </li>
          <li class="nav-item">
            <Link to="about" className='link-item'><a class="nav-link">About</a></Link>
          </li>
          <li class="nav-item">
            <Link className='link-item' to="/contact"><a class="nav-link" aria-disabled="true">Contact us</a></Link>
          </li>
          <button type='button' className='button'>Login</button>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Header;
<nav className='nav-bar'>
<div className='logo-contianer'>
    <img src='https://businesssphere.info/uploads/web_photo_upload/171610104193261.png'
        className='logo'
        alt='logo'
    />
</div>
    <ul className='un-list'>
        <li className='nav-item'>Home</li>
        <li className='nav-item'>Driectory Listing Form</li>
        <li className='nav-item'>Driectory</li>
        <li className='nav-item'>About </li>
        <li className='nav-item'>Contact us</li>
    </ul>
    <button type='button' className='button'>Login</button>
</nav>