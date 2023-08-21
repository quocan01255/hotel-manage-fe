// import React, { createContext, useContext, useState } from "react";

// const BookingContext = createContext();

// export const BookingProvider = ({ children }) => {
//   const [bookingData, setBookingData] = useState({
//     roomType: "",
//     checkIn: "",
//     checkOut: "",
//     totalPrice: 0, // Sử dụng giá trị số, không có dấu phẩy và VND
//   });

//   return (
//     <BookingContext.Provider value={{ bookingData, setBookingData }}>
//       {children}
//     </BookingContext.Provider>
//   );
// };


// export const useBooking = () => {
//   return useContext(BookingContext);
// };
