import React, { useCallback, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";

const RoomCart = ({
  removeRoom,
  cart,
  handleNotify,
  totalRoomPrice,
  guestCart,
}) => {
  const [data, setData] = useState([]);
  const checkLogin = localStorage.getItem("loggedIn");
  const currencyFormat = useCallback((num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }, []);

  const handleClick = (id) => {
    removeRoom(id);
    handleNotify();
  };

  // const totalRoomPrice = useMemo(() => {
  //   return cart.reduce((total, room) => total + room.price * room.quantity, 0);
  // }, [cart]);

  if (!checkLogin) {
    return (
      <div className="mt-5 mp-5">
        <div className="c-room-card ">
          {guestCart.map((room) => (
            <div key={room.id}>
              <img
                className="c-room-image"
                src={room.img}
                alt="Hình ảnh phòng"
              />
              <div className="c-form-details">
                <div className="c-form-title">{room.name}</div>
                <div className="c-room-subtitle">{room.detail}</div>
                <div className="c-room-features">{room.description}</div>
                <div className="c-room-rating">Quantity: {room.quantity}</div>
                <div className="c-room-price">
                  {currencyFormat(String(room.price))} VND
                  <br />
                </div>
              </div>
            </div>
          ))}
          <br />
          <div className="c-booking-price">
            Total price: {currencyFormat(String(totalRoomPrice))} VND
          </div>
        </div>
      </div>
    );
  }
  return (
    //có login
    <div className="mt-5 mp-5">
      <div className="c-room-card ">
        {cart.map((room) => (
          <div key={room.id}>
            <img className="c-room-image" src={room.img} alt="Hình ảnh phòng" />
            <div className="c-form-details">
              <div className="c-form-title">{room.name}</div>
              <div className="c-room-subtitle">{room.detail}</div>
              <div className="c-room-features">{room.description}</div>
              <div className="c-room-rating">Quantity: {room.quantity}</div>
              <div className="c-room-price">
                {currencyFormat(room.price)} VND
              </div>
            </div>
          </div>
        ))}
        <br />
        <div className="c-booking-price">
          Total price: {currencyFormat(String(totalRoomPrice))} VND
        </div>
      </div>
    </div>
  );
};

export default RoomCart;
