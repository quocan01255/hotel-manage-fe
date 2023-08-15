import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "./headerbooking.css";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../../redux/actions/authActions'

function Headerbooking() {
  const checkLogin = localStorage.getItem("loggedIn");
  const dispatch = useDispatch()

  const handleClick = useCallback(() => {
    dispatch(logout())
    localStorage.clear()
  }, [])

  if (localStorage.getItem("user")) {
    console.log(JSON.parse(localStorage.getItem("user")))

  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light header-booking">
        <div className="container">
          <Link to="/" className="brand ">
            <h1 className="logo" >clément</h1>
          </Link>
          <ul className="nav justify-content-end">
            <li className="item">
              {
                !checkLogin &&
                <Link to="/login" className="brand">
                  Login
                </Link>
              }
              <li className="item">
                <Link to="/history" className="brand">
                  My booking
                </Link>
              </li>
              <li className="item">
                <Link to="/homecart" className="brand">
                  Cart
                </Link>
              </li>
              {
                checkLogin &&
                <li className="item">
                  <Link to="/login" className="brand" onClick={handleClick}>
                    Logout
                  </Link>
                </li>
              }
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Headerbooking;
