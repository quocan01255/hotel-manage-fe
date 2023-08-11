import React, { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    roomType: "Deluxe Plus Twin",
    checkIn: "August 15, 2023",
    checkOut: "August 20, 2023",
    totalPrice: "1,690,000 VND",
  },
  ); // Initial booking data

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  return useContext(BookingContext);
};
