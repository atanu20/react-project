import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../img/techpoint.png';


const Navbar =()=>{
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
  <NavLink className="navbar-brand" to ="/">
      <img src={logo} alt="logo" className="logo" />
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home </NavLink>
 
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
        {/* <HashLink smooth className="nav-link" to="#sec1">Sec1</HashLink> */}
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/add">Add New</NavLink>
        {/* <HashLink smooth className="nav-link" to="#sec2">Sec2</HashLink> */}
      </li>
     
    </ul>
    
  </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;