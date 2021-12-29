import React from 'react'
import './Navbar.css'
import {  Link } from "react-router-dom";

function Navbar() {
    return (
        <div id='paper' >
            <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
  <Link to="/">  <a className="navbar-brand" href="#">Sunil cj</a> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <img className='img_h' src='./hamburger.png'/>
    </button>
    </div>
    <div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/"> <a className="nav-link active" aria-current="page" href="#">Home</a> </Link>
        </li>
        <li className="nav-item">
        <Link to="/About"><a className="nav-link" href="#">About</a></Link>
        </li>
        
        <li className="nav-item">
        <Link to="/Contact"><a className="nav-link ">Contact</a></Link>
        </li>
      </ul> 
    </div>
  </div>
</nav>
<br />
        </div>
    )
}

export default Navbar
