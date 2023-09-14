import React, { useCallback } from "react";

const RoomCart = ({
  removeRoom,
  cart,
  totalRoomPrice,
  guestCart,
  increaseQuantity,
  decreaseQuantity
}) => {
  const checkLogin = localStorage.getItem("loggedIn");

  const handleClick = (id) => {
    removeRoom(id);
  };

  const handleIncrease = (id,checkin) => {
    increaseQuantity(id,checkin)
  }

  const handleDecrease = (id,checkin) => {
    decreaseQuantity(id,checkin)
  }

  // Not logged in
  if (!checkLogin) {
    return (
      <div className="mt-5 mp-5" style={{ marginTop: '0' }}>
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
                <div className="c-room-features">
                  <ul>
                    {room.description.map((item, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-circle"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="c-room-rating">
                  Quantity: {room.quantity}
                  <button className="btn btn-primary room_tab-btn" onClick={() => handleDecrease(room.id,room.checkin)}>
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <button className="btn btn-primary room_tab-btn" style={{ marginLeft: '4px' }} onClick={() => handleIncrease(room.id,room.checkin)}>
                    <i className="fa-solid fa-plus"></i>
                  </button>

                </div>
                <div className="c-room-price">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(room.price * room.quantity)}
                  <button
                    className="btn btn-primary room_tab-btn"
                    onClick={() => handleClick(room.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
          <br />        
        </div>
      </div>
    );
  }
  return (
    //Logged in
    <div className="mt-5 mp-5">
      <div className="c-room-card ">
        {cart.map((room) => (
          <div key={room.id}>
            <img className="c-room-image" src={room.img} alt="Hình ảnh phòng" />
            <div className="c-form-details">
              <div className="c-form-title">{room.name}</div>
              <div className="c-room-subtitle">{room.detail}</div>
              <div className="c-room-features">
                <ul>
                  {room.description.map((item, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-circle"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="c-room-rating">
                Quantity: {room.quantity}
                <button className="btn btn-primary room_tab-btn" onClick={() => handleDecrease(room.id,room.checkin)}>
                  <i className="fa-solid fa-minus"></i>
                </button>
                <button className="btn btn-primary room_tab-btn" style={{ marginLeft: '4px' }} onClick={() => handleIncrease(room.id,room.checkin)}>
                  <i className="fa-solid fa-plus"></i>
                </button>

              </div>
              <div className="c-room-price">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(room.price * room.quantity)}
                <button
                  className="btn btn-primary room_tab-btn"
                  onClick={() => handleClick(room.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
        <br />
       
      </div>
    </div>
  );
};

export default RoomCart;