import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Link } from 'react-router-dom'
// import logo from "../../assets/img/logo3.png";
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" className="navbar-brand p-0" >
                <h1 className="m-0">clément</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto py-0">
                    <ul className="navbar-nav">
                        <Link to="/villapage" className="nav-item nav-link" >Rooms</Link>
                        <Link to="/culinarypage" className="nav-item nav-link" >Restaurant</Link>
                        <Link to="/" className="nav-item nav-link" >Home</Link>
                        <Link to="/explorepage" className="nav-item nav-link" >Explore</Link>
                        <Link to="/gallerypage" className="nav-item nav-link" >Gallery</Link>
                    </ul>
                </div>

                {/* <a href="#" className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3 d-none d-lg-block" >Book Now</a> */}
                <Link style={{ width: '135px' }} to="/bookingpage" className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3 d-none d-lg-block" >Book Now</Link>
            </div>
        </nav>
    )
}
export default Header
