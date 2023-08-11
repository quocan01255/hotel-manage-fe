import React from "react";
import { Link } from "react-router-dom";
import "./headerbooking.css";
function Headerbooking() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light header-booking">
        <div className="container">
          <Link to="/" className="brand ">
            <h1 className="logo" >clément</h1>
          </Link>
          <ul className="nav justify-content-end">
            <li className="item">
            <Link to="/login" className="brand">
          Login
          </Link>
              <li className="item">
                <Link to="/history" className="brand">
                  My booking
                </Link>
              </li>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Headerbooking;
