import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useCallback, useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, resetCartMessage } from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import RoomCart from "../../Components/User/RoomCart";
import HeaderBooking from "../../Components/User/header_booking/Headerbooking";
import PaymentForm from "../../Components/User/PaymentForm";
import BookingSummary from "../../Components/User/BookingSummary";
import Footers from "../../Components/User/Footers";
import "../../Css/styleroom.css";
import Headerbooking from "../../Components/User/header_booking/Headerbooking";
import { useParams } from "react-router-dom";


function HomeCart() {
  const dispatch = useDispatch()
  const cartState = useSelector((state) => state.cartReducer);
  const [rooms, setRooms] = useState([]);
  const [cart, setCart] = useState([]);
  const [showNotify, setShowNotify] = useState(false)
  const checkLogin = localStorage.getItem("loggedIn");

  const guestCart = JSON.parse(localStorage.getItem('guestCart'))

  useEffect(() => {
    if (!checkLogin) {
      fetch("http://localhost:3001/rooms")
        .then((response) => response.json())
        .then((rooms) => {
          setRooms(rooms);
          const result = []
          guestCart.forEach((item) => {
            rooms.forEach((room) => {
              if (room.id === item.idRoom) {
                let quantity = item.quantity
                result.push({ ...room, quantity })
              }
            });
          })
          setCart(result);
        })
    } else {
      fetch("http://localhost:3001/userCart")
        .then((response) => response.json())
        .then((cart) => {
          fetch("http://localhost:3001/rooms")
            .then((response) => response.json())
            .then((rooms) => {
              setRooms(rooms);
              let idUser;
              if (localStorage.getItem("user")) {
                idUser = JSON.parse(localStorage.getItem("user")).id;
              }
              const filteredRooms = cart.filter(
                (product) => product.idUser === idUser
              );
              const result = []
              filteredRooms.forEach((item) => {
                rooms.forEach((room) => {
                  if (room.id === item.idRoom) {
                    let quantity = item.quantity
                    result.push({ ...room, quantity })
                  }
                });
              })
              setCart(result);
            })
        })
        .catch((err) => { });
    }
  }, [checkLogin, guestCart]);

  const handleRemove = useCallback((id) => {
    const loggedIn = localStorage.getItem("loggedIn")
    if (!loggedIn) {
      dispatch(remove(id, false, null))
    } else {
      const user = JSON.parse(localStorage.getItem("user"))
      dispatch(remove(id, true, user.id))
    }
  }, [dispatch])

  const handleNotify = () => {
    setShowNotify(true)
  }

  useEffect(() => {
    toast.clearWaitingQueue()
    if (cartState.message) {
      toast(cartState.message, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "message"
      });
      dispatch(resetCartMessage())
    }
  }, [cart, guestCart])


  const totalRoomPrice = useMemo(() => {
      return cart.reduce((total, room) => total + room.price * room.quantity, 0);
  }, [cart]);

  return (
    <>
      <ToastContainer />
      <Headerbooking />
      <div style={{ backgroundColor: '#f8f8f8', padding: '100px 0' }}>
        <div className="container" >
          <div className="backpage">
            <Link to="/bookingpage" >
              <i class="fa-solid fa-arrow-left"></i>
              Return
            </Link>
          </div>
          <div className="row">
            <div className="col-md-6">
              <RoomCart removeRoom={handleRemove} cart={cart} handleNotify={handleNotify} totalRoomPrice={totalRoomPrice} guestCart={cart} />
            </div>
            <div className="col-md-6">
              <PaymentForm totalRoomPrice={totalRoomPrice} />
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
}

export default HomeCart;