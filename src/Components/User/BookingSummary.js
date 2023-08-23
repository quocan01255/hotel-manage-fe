
import React from "react";
const BookingSummary = (props) => {
  const { totalRoomPrice } = props;
  const currencyFormat = (num) => {
    return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <>
      {
        <div className="c-booking-summary">
          <div className="c-booking-title">Booking Summary</div>
          <div className="c-booking-item">
            <div className="c-booking-info">
              <span className="c-booking-price">Total price: {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(totalRoomPrice)}</span>
            </div>
          </div>
        </div>
      }

    </>

  );
};

export default BookingSummary;