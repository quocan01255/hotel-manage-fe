import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Headerbooking() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" element className="brand ">
            <h1 className="logo" >clément</h1>
          </Link>
          <ul class="nav justify-content-end">
            <li class="item">
            <Link to="/login" className="brand">
          Login
          </Link>
              <li className="item">
                <Link to="/login" className="brand">
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
