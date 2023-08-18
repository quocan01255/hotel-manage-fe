import React from "react";
import RoomCard from "../../Components/User/RoomCard";
import HeaderBooking from "../../Components/User/header_booking/Headerbooking";
import PaymentForm from "../../Components/User/PaymentForm";
import BookingSummary from "../../Components/User/BookingSummary";
import Footers from "../../Components/User/Footers";
import "../../Css/styleroom.css";
import Headerbooking from "../../Components/User/header_booking/Headerbooking";

function HomeCard() {
  return (
    <>
      <Headerbooking />
      <div style={{ backgroundColor: '#f8f8f8', padding: '30px 0' }}>
        <div className="container" >
          <div className="row">
            <div className="col-md-6">
              <RoomCard />
            </div>
            <div className="col-md-6">
              <PaymentForm />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <BookingSummary />
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
}

export default HomeCard;
