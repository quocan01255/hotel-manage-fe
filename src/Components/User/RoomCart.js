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
  const currencyFormat = useCallback((num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }, []);

  const handleClick = (id) => {
    removeRoom(id);
  };

  const handleIncrease = (id) => {
    increaseQuantity(id)
  }

  const handleDecrease = (id) => {
    decreaseQuantity(id)
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
                <div className="c-room-features">{room.description}</div>
                <div className="c-room-rating">
                  Quantity: {room.quantity}
                  <button className="btn btn-primary room_tab-btn" onClick={() => handleDecrease(room.id)}>
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <button className="btn btn-primary room_tab-btn" style={{marginLeft: '4px'}} onClick={() => handleIncrease(room.id)}>
                    <i class="fa-solid fa-plus"></i>
                  </button>
                  
                </div>
                <div className="c-room-price">
                  {currencyFormat(String(room.price * room.quantity))}đ
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
          <div className="c-booking-price">
            Total price: {currencyFormat(String(totalRoomPrice))}đ
          </div>
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
              <div className="c-room-features">{room.description}</div>
              <div className="c-room-rating">
                Quantity: {room.quantity}
                <button className="btn btn-primary room_tab-btn" onClick={() => handleDecrease(room.id)}>
                  <i class="fa-solid fa-minus"></i>
                </button>
                <button className="btn btn-primary room_tab-btn" style={{marginLeft: '4px'}} onClick={() => handleIncrease(room.id)}>
                  <i class="fa-solid fa-plus"></i>
                </button>
                
              </div>
              <div className="c-room-price">
                {currencyFormat(room.price * room.quantity)}đ
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
        <div className="c-booking-price">
          Total price: {currencyFormat(String(totalRoomPrice))}đ
        </div>
      </div>
    </div>
  );
};

export default RoomCart;
