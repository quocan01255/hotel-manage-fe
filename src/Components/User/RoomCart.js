import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RoomCart = ({removeRoom, cart}) => {
  const currencyFormat = useCallback((num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }, []);

  

  return (
    <div className="mp-5">
      <div className="c-room-card mt-5 mb-5 pt-5 pb-5">
        {cart.map((room) => (
          <div key={room.id}>
            <img className="c-room-image" src={room.img} alt="Hình ảnh phòng" />
            <div className="c-form-details">
              <div className="c-form-title">{room.name}</div>
              <div className="c-room-subtitle">{room.detail}</div>
              <div className="c-room-features">
                <ul>
                  {room.description.map((item, index) =>
                    <li key={index}>
                      <i className="fa-solid fa-circle"></i>
                      {item}
                    </li>
                  )}
                </ul>
              </div>
              <div className="c-room-rating">Quantity: {room.quantity}</div>
              <div className="c-room-price">
                {currencyFormat(room.price*room.quantity)}đ
                <button
                  className="btn btn-primary room_tab-btn"
                  onClick={() => removeRoom(room.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomCart;
