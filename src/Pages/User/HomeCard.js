import React from "react";
import RoomCard from "../../Components/User/RoomCard";

import PaymentForm from "../../Components/User/PaymentForm";
import BookingSummary from "../../Components/User/BookingSummary";
import Footer from "../../Components/User/Footer";
import '../../Css/styleroom.css'

function HomeCard() {
  return (
    <div className="container">
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
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
