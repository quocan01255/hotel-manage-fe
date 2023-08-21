import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useMemo } from "react";

const RoomCard = () => {
  const { idRoom } = useParams(); //path room/id/1
  const dispatch = useDispatch();
  const [rooms, setRooms] = useState([]);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [addedRooms, setAddedRooms] = useState([]);
  const loggedIn = localStorage.getItem("user");
  const checkLogin = localStorage.getItem("loggedIn");

  // không login
  const guestCart = useSelector((state) => state.cartReducer.guestCart);
  console.log("guestCart", guestCart);
  const compare = () => {
    let comparedata = guestCart.filter((e) => {
      return e.idRoom == idRoom;
    });
    setData(comparedata);
  };
  useEffect(() => {
    compare();
  }, [idRoom]);

  useEffect(() => {
    fetch("http://localhost:3001/rooms")
      .then((response) => response.json())
      .then((rooms) => {
        const result = [];
        guestCart.forEach((item) => {
          rooms.forEach((room) => {
            if (room.id === item.idRoom) {
              let quantity = item.quantity;
              result.push({ ...room, quantity });
            }
          });
        });

        setData(result);
      })
      .catch((error) => {});
  }, []);

  //có login
  useEffect(() => {
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
            const result = [];
            filteredRooms.forEach((item) => {
              rooms.forEach((room) => {
                if (room.id === item.idRoom) {
                  let quantity = item.quantity;
                  result.push({ ...room, quantity });
                }
              });
            });
            setCart(result);
          });
      })
      .catch((err) => {});
  }, []);

  const totalRoomPrice = useMemo(() => {
    return data.reduce((total, room) => total + room.price * room.quantity, 0);
  }, [data]);

  // const currencyFormat = (num) => {
  //   if (typeof num === "number") {
  //     num = String(num); // Chuyển số thành chuỗi trước khi định dạng
  //   }
  //   return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  // };

  const currencyFormat = (num) => {
    if (typeof num === "number" || typeof num === "string") {
      num = String(num); // Convert to string if it's a number
      return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
    return "";
  };

  if (!checkLogin) {
    return (
      <div className="mt-5 mp-5">
        <div className="c-room-card ">
          {data.map((room) => (
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
        
      </div>
    </div>
  );
};

export default RoomCard;
