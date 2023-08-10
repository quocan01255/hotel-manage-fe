import React from "react";
import { useBooking } from "./BookingContext";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";


const BookingInfo = () => {
  // ... Your existing BookingInfo component
  const { bookingData } = useBooking();

  return (
    <div className="booking-info-container">
      <h2 className="booking-title" style={{fontSize:"20px"}}>Complete your booking</h2>
      <div className="booking-info">
        <label>Room Type:</label>
        <span>{bookingData.roomType}</span>
      </div>
      <div className="booking-info">
        <label>Check In:</label>
        <span>{bookingData.checkIn}</span>
      </div>
      <div className="booking-info">
        <label>Check Out:</label>
        <span>{bookingData.checkOut}</span>
      </div>
      <div className="booking-info">
        <label>Total Price:</label>
        <span>{bookingData.totalPrice}</span>
      </div>
      {/* Render other booking information */}
    </div>
  );
};

const PaymentForm = () => {
  // ... Your existing PaymentForm component
  return (
    <div className="payment-form-container">
      <div className="payment-icons">
        <label style={{fontWeight:"bold",fontSize:"18px",marginRight:"10px",marginTop:"15px",marginBottom:"10px"}}>Pay With</label>
        <img
          className="mr-1 rounded"
          style={{ height: "24px", width: "auto" }}
          src="https://payment.book-directonline.com/card-logos/visa.svg"
          alt="Pay with MasterCard"
          aria-label="Pay with MasterCard"
        />
        <img
          className="mr-1 rounded"
          style={{ height: "24px", width: "auto" }}
          src="https://payment.book-directonline.com/card-logos/mastercard.svg"
          alt="Pay with Visa"
          aria-label="Pay with Visa"
        />

        {/* <FontAwesomeIcon icon={faCcVisa} className="visa-icon" />
        <FontAwesomeIcon icon={faCcMastercard} className="mastercard-icon" /> */}
      </div>
      <label className="form-label" >Name on card</label>
      <input
        className="form-input"
        type="text"
        placeholder="Enter the name on the credit card"
      />
      <br />
      <label className="form-label" >Card Number</label>
      <input
        className="form-input"
        type="text"
        placeholder="Enter your credit number"
      />
      <br />
      <label className="form-label">Expiry date</label>
      <input className="form-input" type="text" placeholder="MM/YYYY" />
      <br />
      <label className="form-label">CVV</label>
      <input
        className="form-input"
        type="text"
        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
      />
      <br />
      <button className="form-button" type="button">
        Book
      </button>
    </div>
  );
};

const PayCard = () => {
  return (
    <div>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg bg-body">
        <div className="container">
          <a className="navbar-brand" href="#/">
            ClementHotel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* PayCard content */}
      <MDBContainer fluid className="py-5 gradient-custom">
        <MDBRow className="d-flex justify-content-center py-5">
          <MDBCol md="7" lg="5" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-4">
                <BookingInfo />
                <PaymentForm />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Bootstrap Footer */}
      <footer className="bg-light py-4">
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} ClementHotel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PayCard;











