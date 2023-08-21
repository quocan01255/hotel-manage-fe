// import React from "react";
// import { useBooking } from "../User/BookingContext";
// import { useSelector } from "react-redux";

// const BookingSummary = () => {
//   const { bookingData } = useBooking();
//   // const overallTotalPrice = useSelector((state) => state.priceReducer.overallTotalPrice);

//   // const currencyFormat = (num) => {
//   //   if (typeof num === 'number') {
//   //     num = String(num); // Chuyển số thành chuỗi trước khi định dạng
//   //   }
//   //   return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
//   // };

//   const currencyFormat = (num) => {
//     if (typeof num === 'number' || typeof num === 'string') {
//       num = String(num); // Convert to string if it's a number
//       return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
//     }
//     return "";
//   };
  

//   return (
//     <div className="c-booking-summary">
//       <div className="c-booking-title">Booking Summary</div>
//       <div className="c-booking-item">
//         <div className="c-booking-info">
//           <span>Room Type: {bookingData.roomType}</span>
//           <span>Total Price: {currencyFormat()} VND</span>
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













// // import React, { useCallback, useEffect, useState } from "react";
// // import { useBooking } from "../User/BookingContext";
// // import { useSelector } from "react-redux";

// // const BookingSummary = () => {
// //   // const {bookingData}= useBooking();
// //   const [price, setPrice] = useState(0);
// //   const getdata = useSelector((state) => state.PayReducer.carts);

  
// //   const total = useCallback(() => {
// //     let price = 0;
// //     getdata.map((ele) =>(price = ele.price * ele.quantity + price)
// //     );
// //     setPrice(price);
// //   }, [getdata]);

// //   useEffect(() => {
// //     total();
// //   }, [total])
// //   const currencyFormat = (num) => {
// //     return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
// //   }
// //   return (
// //     <>
// //       {
// //         getdata.map((value) => {
// //           return (
// //             <div className="c-booking-summary">
// //               <div className="c-booking-title">Booking Summary</div>
// //               <div className="c-booking-item">
// //                 <div className="c-booking-info">
// //                   <span>Room Type: {value.name}</span>

// //                   <span className="c-booking-price">{price}VND</span>
// //                 </div>
// //               </div>
// //               <div className="c-booking-item">
// //                 <div className="c-booking-info">
// //                   <span>Check-in: {value.checkIn}</span>
// //                 </div>
// //               </div>
// //               <div className="c-booking-item">
// //                 <div className="c-booking-info">
// //                   <span>Check-out: {value.checkOut}</span>
// //                 </div>
// //               </div>

// //             </div>
// //           )
// //         })
// //       }

// //     </>

// //   );
// // };

// // export default BookingSummary;





