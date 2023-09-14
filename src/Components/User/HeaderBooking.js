import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./headerbooking.css";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../../redux/actions/authActions'
import Badge from '@mui/material/Badge';
function Headerbooking() {  
  const checkLogin = localStorage.getItem("loggedIn");
  const checkUser = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch()
  const [rooms, setRooms] = useState([])
  const [guestCart, setGuestCart] = useState([])
  const cartState = useSelector(state => state.cartReducer)
  const handleClick = useCallback(() => {
    dispatch(logout())
    localStorage.removeItem("loggedIn")
  }, [])
  //startmui
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //endmui

  useEffect(() => {
    if (localStorage.getItem('guestCart')) {
      setGuestCart(JSON.parse(localStorage.getItem('guestCart')))
    }
  }, [cartState])

  useEffect(() => {
    fetch('http://localhost:3001/userCart')
      .then((response) => response.json())
      .then((rooms) => {
        const phong = rooms.filter((item) => item.idUser === checkUser.id)
        setRooms(phong)
      })
      .catch((error) => {
      });
  }, [cartState])

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
              {
                checkLogin &&
                <li className="item">
                  <Link to="/history" className="brand">
                    My booking
                  </Link>
                </li>
              }

              {
                !checkLogin &&
                <li className="item">
                  <Link to="/homecart" className="brand">
                    <Badge badgeContent={guestCart.length} color="primary"
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