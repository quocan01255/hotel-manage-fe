/* eslint-disable jsx-a11y/img-redundant-alt */
// import React from "react";

// const RoomCard = () => {
//   return (
//     <div>
//       <div className="room-card">
//         <img
//           className="room-image"
//           src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/781688/781688/SUPERIOR_TWIN_02.jpg?auto=format,compress&fit=crop&crop=entropy&w=1366&q=75"
//           alt="Room Image"
//         />
//         <div className="room-details">
//           <div className="room-title">Deluxe Twin</div>
//           <div className="room-subtitle">
//             Studio Apartment with Air Conditioning
//           </div>
//           <div className="room-features">
//             Entire Studio - 1 Bathroom - 21m² - 1 Full bed
//           </div>
//           <div className="room-cancel">Free cancellation</div>
//           <div className="room-rating">Rating: 4.5</div>
//           <div className="room-price">1,450,000 VND</div>
//           <div className="room-tax">Include taxes and fees</div>
//         </div>
//       </div>
//       <div className="room-card">
//         <img
//           className="room-image"
//           src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/781661/781661/SUPERIOR_KING__12_.jpg?auto=format,compress&fit=crop&crop=entropy&w=1366&q=75"
//           alt="Room Image"
//         />
//         <div className="room-details">
//           <div className="room-title">Deluxe King</div>
//           <div className="room-subtitle">
//             Studio Apartment with Air Conditioning
//           </div>
//           <div className="room-features">
//             Entire Studio - 1 Bathroom - 21m² - 1 Full bed
//           </div>
//           <div className="room-cancel">Free cancellation</div>
//           <div className="room-rating">Rating: 4.5</div>
//           <div className="room-price">1,550,000 VND</div>
//           <div className="room-tax">Include taxes and fees</div>
//         </div>
//       </div>
//       <div className="room-card">
//         <img
//           className="room-image"
//           src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/781696/781696/SUPERIOR_TWIN_05.jpg?auto=format,compress&fit=crop&crop=entropy&w=1366&q=75"
//           alt="Room Image"
//         />
//         <div className="room-details">
//           <div className="room-title">Deluxe Plus Twin</div>
//           <div className="room-subtitle">
//             Studio Apartment with Air Conditioning
//           </div>
//           <div className="room-features">
//             Entire Studio - 1 Bathroom - 21m² - 1 Full bed
//           </div>
//           <div className="room-cancel">Free cancellation</div>
//           <div className="room-rating">Rating: 4.5</div>
//           <div className="room-price">1,690,000 VND</div>
//           <div className="room-tax">Include taxes and fees</div>
//         </div>
//       </div>
//       <div className="room-card">
//         <img
//           className="room-image"
//           src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/781696/781696/SUPERIOR_TWIN_05.jpg?auto=format,compress&fit=crop&crop=entropy&w=1366&q=75"
//           alt="Room Image"
//         />
//         <div className="room-details">
//           <div className="room-title">Deluxe Plus Twin</div>
//           <div className="room-subtitle">
//             Studio Apartment with Air Conditioning
//           </div>
//           <div className="room-features">
//             Entire Studio - 1 Bathroom - 21m² - 1 Full bed
//           </div>
//           <div className="room-cancel">Free cancellation</div>
//           <div className="room-rating">Rating: 4.5</div>
//           <div className="room-price">1,690,000 VND</div>
//           <div className="room-tax">Include taxes and fees</div>
//         </div>
//       </div>
//       <div className="room-card">
//         <img
//           className="room-image"
//           src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/781696/781696/SUPERIOR_TWIN_05.jpg?auto=format,compress&fit=crop&crop=entropy&w=1366&q=75"
//           alt="Room Image"
//         />
//         <div className="room-details">
//           <div className="room-title">Deluxe Plus Twin</div>
//           <div className="room-subtitle">
//             Studio Apartment with Air Conditioning
//           </div>
//           <div className="room-features">
//             Entire Studio - 1 Bathroom - 21m² - 1 Full bed
//           </div>
//           <div className="room-cancel">Free cancellation</div>
//           <div className="room-rating">Rating: 4.5</div>
//           <div className="room-price">1,690,000 VND</div>
//           <div className="room-tax">Include taxes and fees</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomCard;

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
//       <div className="room-details">
//         <div className="room-title">Deluxe Plus Twin</div>
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

import React, { useState } from "react";
import { useBooking } from "../../Components/User/BookingContext";

const RoomCard = ({ roomInfo }) => {
  const { bookingData, setBookingData } = useBooking();
  const [isSelected, setIsSelected] = useState(false);

  const handleRoomSelect = () => {
    setIsSelected(!isSelected);

    if (!isSelected) {
      // Thêm giá phòng vào tổng giá khi được chọn
      const newTotalPrice = bookingData.totalPrice + roomInfo.price;
      setBookingData({ ...bookingData, totalPrice: newTotalPrice });
    } else {
      // Trừ giá phòng khỏi tổng giá khi bỏ chọn
      const newTotalPrice = bookingData.totalPrice - roomInfo.price;
      setBookingData({ ...bookingData, totalPrice: newTotalPrice });
    }
  };

  return (
    <div className={`room-card ${isSelected ? "selected" : ""}`}>
      <img
        className="room-image"
        src={roomInfo.img} //Sửa thành roomInfo.img
        alt="Hình ảnh phòng"
      />
      <div className="room-details">
        <div className="room-title">{roomInfo.name}</div>{" "}
        {/* Sửa thành roomInfo.name */}
        <div className="room-subtitle">{roomInfo.detail}</div>
        <div className="room-features">{roomInfo.description.join(" - ")}</div>
        <div className="room-rating">Rating: 4.5</div>
        {/* Các thông tin phòng khác */}
        <div className="room-price">{roomInfo.price} VND</div>
        <button onClick={handleRoomSelect}>
          {isSelected ? "Cancel" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
