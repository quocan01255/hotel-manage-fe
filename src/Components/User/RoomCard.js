/* eslint-disable jsx-a11y/img-redundant-alt */
// import React, { useState } from "react";
// import { useBooking } from "../Components/BookingContext";
// // import BookingSummary from "../Components/BookingSummary";

// const RoomCard = ({ roomInfo }) => {
//   const { bookingData, setBookingData } = useBooking();
//   const [isSelected, setIsSelected] = useState(false);

//   const handleRoomSelect = () => {
//     setIsSelected(!isSelected);

//     if (!isSelected) {
//       // Thêm giá phòng vào tổng giá khi được chọn
//       const newTotalPrice = bookingData.totalPrice + roomInfo.price;
//       setBookingData({ ...bookingData, totalPrice: newTotalPrice });
//     } else {
//       // Trừ giá phòng khỏi tổng giá khi bỏ chọn
//       const newTotalPrice = bookingData.totalPrice - roomInfo.price;
//       setBookingData({ ...bookingData, totalPrice: newTotalPrice });
//     }
//   };

//   return (
//     <div className={`room-card ${isSelected ? "selected" : ""}`}>
//       <img
//         className="room-image"
//         src={roomInfo.imageUrl}
//         alt="Hình ảnh phòng"
//       />
//       <div className="c-form-details">
//         <div className="c-form-title">Deluxe Plus Twin</div>
//         <div className="room-subtitle">
//           Studio Apartment with Air Conditioning
//         </div>
//         <div className="room-features">
//           Entire Studio - 1 Bathroom - 21m² - 1 Full bed
//         </div>
//         <div className="room-cancel">Free cancellation</div>
//         <div className="room-rating">Rating: 4.5</div>
//         {/* Các thông tin phòng khác */}
//         <div className="room-price">{roomInfo.price} VND</div>
//         <button onClick={handleRoomSelect}>
//           {isSelected ? "Cancel" : "Select"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RoomCard;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const RoomCard = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/rooms")
      .then((res) => res.json())
      .then((booking) => {
        setData(booking);
      });
  }, []);

  const compare = () => {
    let comparedata = data.filter((e) => {
      return e.id === id;
    });
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);
  const currencyFormat = (num) => {
    return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
      <div className="c-room-card ">
        {data.map((element) => {
          return (
            <>
              <img
                className="c-room-image"
                src={element.img}
                alt="Room Image"
              />
              <div className="c-form-details">
                <div className="c-form-title">{element.name}</div>
                <div className="c-room-subtitle">{element.detail}</div>
                <div className="c-room-features">{element.description}</div>
                <div className="c-room-rating">Rating: 4.5</div>
                <div className="c-room-price">
                  {" "}
                  {currencyFormat(element.price)} VND
                </div>
              </div>
            </>
          );
        })}
      </div>
  );
};

export default RoomCard;
