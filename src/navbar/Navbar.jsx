import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
         
  <nav>
    <div class="wrapper">
      <div class="logo"><NavLink to="/">CodingNepal</NavLink></div>
      <input type="radio" name="slider" id="menu-btn" />
      <input type="radio" name="slider" id="close-btn" />
      <ul class="nav-links">
        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li>
          <NavLink to="/about" class="desktop-item">Dropdown Menu</NavLink>
          <input type="checkbox" id="showDrop" />
          <label for="showDrop" class="mobile-item">Dropdown Menu</label>
          <ul class="drop-menu">
            <li><NavLink to="/about">Drop menu 1</NavLink></li>
            <li><NavLink to="/about">Drop menu 2</NavLink></li>
            <li><NavLink to="/about">Drop menu 3</NavLink></li>
            <li><NavLink to="/about">Drop menu 4</NavLink></li>
          </ul>
        </li>
        <li>
          <NavLink to="/about" class="desktop-item">Mega Menu</NavLink>
          <input type="checkbox" id="showMega" />
          <label for="showMega" class="mobile-item">Mega Menu</label>
          <div class="mega-box">
            <div class="content">
              <div class="row">
                
              </div>
              <div class="row">
                <header>Design Services</header>
                <ul class="mega-links">
                  <li><NavLink to="/about">Graphics</NavLink></li>
                  <li><NavLink to="/about">Vectors</NavLink></li>
                  <li><NavLink to="/about">Business cards</NavLink></li>
                  <li><NavLink to="/about">Custom logo</NavLink></li>
                </ul>
              </div>
              <div class="row">
                <header>Email Services</header>
                <ul class="mega-links">
                  <li><NavLink to="/about">Personal Email</NavLink></li>
                  <li><NavLink to="/about">Business Email</NavLink></li>
                  <li><NavLink to="/about">Mobile Email</NavLink></li>
                  <li><NavLink to="/about">Web Marketing</NavLink></li>
                </ul>
              </div>
              <div class="row">
                <header>Security services</header>
                <ul class="mega-links">
                  <li><NavLink to="/about">Site Seal</NavLink></li>
                  <li><NavLink to="/about">VPS Hosting</NavLink></li>
                  <li><NavLink to="/about">Privacy Seal</NavLink></li>
                  <li><NavLink to="/about">Website design</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li><NavLink to="/about">Feedback</NavLink></li>
      </ul>
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>
  </nav>
  
        </>
    )
}

export default Navbar;
