import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useCallback, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import RoomCart from "../../Components/User/RoomCart";
import PaymentForm from "../../Components/User/PaymentForm";
import Footers from "../../Components/User/Footers";
import "../../Css/styleroom.css";
import Headerbooking from "../../Components/User/header_booking/Headerbooking";
import { getCart, removeCartItem } from "../../services/api";
import svgCart from "../../assets/empty-cart-svgrepo-com.svg"
import { Bars } from "react-loader-spinner";

function HomeCart() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [startDate, setStartDates] = useState(new Date());
  const userId = localStorage.getItem("id");
  const [total, setTotal] = useState(0);

  const getCartData = async () => {
    try {
      const cartData = await getCart(userId);
      // console.log(cartData)
      setCart(cartData);
      setLoading(false);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    getCartData();
  }, [])

  const increaseTotal = (value) => {
    setTotal(prevTotal => prevTotal + value)
  }

  const decreaseTotal = (value) => {
    setTotal(prevTotal => prevTotal - value)
  }

  // Handling event
  const handleRemove = async (id) => {
    const response = await removeCartItem(id);
    const cartData = await getCart(userId);
    setCart(cartData);
  };

  return (
    <>
      <ToastContainer />
      <Headerbooking />
      {loading ? (
        <div style={{ backgroundColor: '#f8f8f8', padding: '100px 0' }}>
          <div className="d-flex justify-content-center p-5">
            <Bars
              height="80"
              width="80"
              color="#259b97"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </div>
      ) : (
        cart ? (
          <div style={{ backgroundColor: '#f8f8f8', padding: '100px 0' }}>
            <div className="container">
              <div className="backpage">
                <Link to="/bookingpage">
                  <i className="fa-solid fa-arrow-left"></i>
                  Return
                </Link>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <RoomCart
                    removeRoom={handleRemove}
                    cart={cart}
                    increaseTotal={increaseTotal}
                    decreaseTotal={decreaseTotal}
                  />
                  <div className="c-booking-summary">
                    <div className="c-booking-title">Booking Summary</div>
                    <div className="c-booking-item">
                      <div className="c-booking-info">
                        <span className="c-booking-price">
                          Total price: {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(total)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <PaymentForm totalRoomPrice={total} cart={cart} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ backgroundColor: '#f8f8f8', padding: '100px 0' }}>
            <div className="container">
              <div className="backpage">
                <Link to="/bookingpage">
                  <i className="fa-solid fa-arrow-left"></i>
                  Return
                </Link>
              </div>
              <div className="row">
                <div className="pt-5">
                  <h4>Your cart is empty</h4>
                  <img src={svgCart} alt="Empty cart" />
                </div>
              </div>
            </div>
          </div>
        )
      )}
      <Footers />
    </>
  );
}

export default HomeCart;