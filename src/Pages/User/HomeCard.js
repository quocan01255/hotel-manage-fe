import React from "react";
import RoomCard from "../../components/user/RoomCard";

import PaymentForm from "../../components/user/PaymentForm";
import BookingSummary from "../../components/user/BookingSummary";
import Footer from "../../components/user/Footer";
import '../../css/styleroom.css'

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
