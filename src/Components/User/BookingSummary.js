// import React from "react";
// import { useBooking } from "../../Components/User/BookingContext";

// const BookingSummary = () => {
//   const { bookingData } = useBooking();

//   return (
//     <div className="c-booking-summary">
//       <div className="c-booking-title">Booking Summary</div>
//       <div className="c-booking-item">
//         <div className="c-booking-info">
//           <span>Room Type: {bookingData.roomType}</span>
//           <span className="c-booking-price">{bookingData.totalPrice} VND</span>
//         </div>
//       </div>
//       <div className="c-booking-item">
//         <div className="c-booking-info">
//           <span>Check-in: {bookingData.checkIn}</span>
//         </div>
//       </div>
//       <div className="c-booking-item">
//         <div className="c-booking-info">
//           <span>Check-out: {bookingData.checkOut}</span>
//         </div>
//       </div>
//       {/* Render other booking information */}
//     </div>
//   );
// };

// export default BookingSummary;

// BookingSummary.js
// import React, { useMemo } from "react";
// import { useBooking } from "../Components/BookingContext";

// const BookingSummary = () => {
//   const { bookingData } = useBooking();

//   // Tính tổng giá tiền từ các phòng đã chọn
//   const selectedRoomPrices = useMemo(() => {
//     const selectedRooms = bookingData.selectedRooms || [];
//     return selectedRooms.reduce((total, room) => total + room.price, 0);
//   }, [bookingData.selectedRooms]);

//   // Tổng giá tiền chứa cả giá tiền từ các phòng đã chọn và các dịch vụ khác
//   const totalPriceWithServices = selectedRoomPrices + bookingData.otherServicePrice;

//   return (
//     <div className="booking-summary">
//       <div className="booking-title">Booking Summary</div>
//       <div className="booking-item">
//         <div className="booking-info">
//           <span>Room Type: {bookingData.roomType}</span>
//           <span className="booking-price">{totalPriceWithServices} VND</span>
//         </div>
//       </div>
//       <div className="booking-item">
//         <div className="booking-info">
//           <span>Check-in: {bookingData.checkIn}</span>
//         </div>
//       </div>
//       <div className="booking-item">
//         <div className="booking-info">
//           <span>Check-out: {bookingData.checkOut}</span>
//         </div>
//       </div>
//       {/* Render other booking information */}
//     </div>
//   );
// };

// export default BookingSummary;

// import React, { useCallback, useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// const BookingSummary = () => {
//   const [price, setPrice] = useState(0);
//   const getdata = useSelector((state) => state.PayReducer.carts);

//   const total = useCallback(() => {
//     let price = 0;
//     getdata.map((ele) =>(price = ele.price * ele.quantity + price)
//     );
//     setPrice(price);
//   }, [getdata]);

//   useEffect(() => {
//     total();
//   }, [total])
//   const currencyFormat = (num) => {
//     return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
//   }
//   return (
//     <>
//       {
//         getdata.map((value) => {
//           return (
//             <div className="c-booking-summary">
//               <div className="c-booking-title">Booking Summary</div>
//               <div className="c-booking-item">
//                 <div className="c-booking-info">
//                   <span>Room Type: {value.name}</span>

//                   <span className="c-booking-price">{price}VND</span>
//                 </div>
//               </div>
//               <div className="c-booking-item">
//                 <div className="c-booking-info">
//                   <span>Check-in: {value.checkIn}</span>
//                 </div>
//               </div>
//               <div className="c-booking-item">
//                 <div className="c-booking-info">
//                   <span>Check-out: {value.checkOut}</span>
//                 </div>
//               </div>

//             </div>
//           )
//         })
//       }

//     </>

//   );
// };

// export default BookingSummary;

import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BookingSummary = () => {
  const [price, setPrice] = useState(0);
  const getdata = useSelector((state) => state.PayReducer.carts);

  const total = useCallback(() => {
    let price = 0;
    getdata.map((ele) => (price = ele.price * ele.quantity + price));
    setPrice(price);
  }, [getdata]);

  useEffect(() => {
    total();
  }, [total]);
  const currencyFormat = (num) => {
    return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <>
      {getdata.map((value) => {
        return (
          <div className="c-booking-summary">
            <div className="c-booking-title">Booking Summary</div>
            <div className="c-booking-item">
              <div className="c-booking-info">
                <span>Room Type: {value.name}</span>

                <span className="c-booking-price">{price}VND</span>
              </div>
            </div>
            <div className="c-booking-item">
              <div className="c-booking-info">
                <span>Check-in: {value.checkIn}</span>
              </div>
            </div>
            <div className="c-booking-item">
              <div className="c-booking-info">
                <span>Check-out: {value.checkOut}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BookingSummary;
