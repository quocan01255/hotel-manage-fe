import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./headerbooking.css";
import Badge from '@mui/material/Badge';
import LogoHotel2 from '../../../assets/LogoHotel2.svg'

function Headerbooking() {
  const checkLogin = localStorage.getItem("token");
  const checkUser = JSON.parse(localStorage.getItem("user"));
  const [rooms, setRooms] = useState([])

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token")
    localStorage.removeItem("id")
  }, [])

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light header-booking">
        <div className="container">
          <Link to="/" className="brand">
            {/* <h1 className="logo" >clément</h1> */}
            <img src={LogoHotel2} alt='Logo' style={{maxWidth: "65px"}}/>
          </Link>
          <ul className="nav justify-content-end">
            <li className="item">
              {
                !checkLogin &&
                <Link to="/login" className="brand">
                  Login
                </Link>
              }
              {
                checkLogin &&
                <li className="item">
                  <Link to="/history" className="brand">
                    My booking
                  </Link>
                </li>
              }
              {
                checkLogin &&
                <li className="item">
                  <Link to="/homecart" className="brand">
                    <Badge badgeContent={rooms.length} color="primary"
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick1}
                    >
                      <i className="fa-solid fa-cart-shopping text-dark" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>
                  </Link>
                </li>
              }
              {
                checkLogin &&
                <li className="item">
                  <Link to="/login" className="brand" onClick={handleLogout}>
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
