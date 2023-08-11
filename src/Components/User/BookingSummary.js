import React from "react";
import { useBooking } from "./BookingContext"; // Import useBooking hook

const BookingSummary = () => {
  const { bookingData } = useBooking(); // Get booking data from context

  return (
    <div className="booking-summary">
      <div className="booking-title">Booking Summary</div>
      <div className="booking-item">
        <div className="booking-info">
          <span>Room Type: {bookingData.roomType}</span>
          <span className="booking-price">{bookingData.totalPrice}</span>
        </div>
      </div>
      <div className="booking-item">
        <div className="booking-info">
          <span>Check-in: {bookingData.checkIn}</span>
        </div>
      </div>
      <div className="booking-item">
        <div className="booking-info">
          <span>Check-out: {bookingData.checkOut}</span>
        </div>
      </div>
      {/* Render other booking information */}
    </div>
  );
};

export default BookingSummary;



