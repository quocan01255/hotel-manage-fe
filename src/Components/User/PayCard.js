import React from "react";
import { useBooking } from "../User/BookingContext";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { Link } from "react-router-dom";

const BookingInfo = () => {
  // ... Your existing BookingInfo component
  const { bookingData } = useBooking();

  return (
    <div className="booking-info-container">
      <h2 className="c-booking-title" style={{ fontSize: "20px" }}>
        Complete your booking
      </h2>
      <div className="c-booking-info">
        <label>Room Type:</label>
        <span>{bookingData.roomType}</span>
      </div>
      <div className="c-booking-info">
        <label>Check In:</label>
        <span>{bookingData.checkIn}</span>
      </div>
      <div className="c-booking-info">
        <label>Check Out:</label>
        <span>{bookingData.checkOut}</span>
      </div>
      <div className="c-booking-info">
        <label>Total Price:</label>
        <span>{bookingData.totalPrice}</span>
      </div>
      {/* Render other booking information */}
    </div>
  );
};

const PaymentForm = () => {
  // ... Your existing PaymentForm component
  const [loading, setLoading] = useState(false); // Trạng thái loading
  const [bookingSuccess, setBookingSuccess] = useState(false); //trạng thái thành công

  // Add state for form data and validation errors
  const [formData, setFormData] = useState({
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [formErrors, setFormErrors] = useState({
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // Handle input change
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Clear the validation error for the current field
    setFormErrors({
      ...formErrors,
      [name]: "",
    });

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBookClick = () => {
    const errors = {};
    if (formData.nameOnCard === "") {
      errors.nameOnCard = "Name on card is required";
    }
    if (formData.cardNumber === "") {
      errors.cardNumber = "Card Number is required";
    }
    if (formData.expiryDate === "") {
      errors.expiryDate = "Expiry Date is required";
    }
    if (formData.cvv === "") {
      errors.cvv = "CVV is required";
    }
    // Add more validation checks for card number, expiry date, and cvv

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Continue with the booking process
    setLoading(true);
    // ... Rest of the booking logic

    setLoading(true); // Bắt đầu loading

    // Giả lập thời gian loading
    setTimeout(() => {
      setLoading(false); // Kết thúc loading
      setBookingSuccess(true); //thành công

      // Reset trạng thái thành công sau khoảng thời gian (ví dụ: 5 giây)
      setTimeout(() => {
        setBookingSuccess(false);
      }, 5000);

      // TODO: Chuyển sang trang thành công hoặc hiển thị thông báo thành công
    }, 2000); // Giả lập 2 giây loading
  };

  return (
    <div className="payment-form-container">
      <div className="payment-icons">
        <label
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            marginRight: "10px",
            marginTop: "15px",
            marginBottom: "10px",
          }}
        >
          Pay With
        </label>
        <img
          className="mr-1 rounded"
          style={{ height: "25px", width: "auto" }}
          src="https://payment.book-directonline.com/card-logos/visa.svg"
          alt="Pay with MasterCard"
          aria-label="Pay with MasterCard"
        />
        <img
          className="mr-1 rounded"
          style={{ height: "25px", width: "auto" }}
          src="https://payment.book-directonline.com/card-logos/mastercard.svg"
          alt="Pay with Visa"
          aria-label="Pay with Visa"
        />

        {/* <FontAwesomeIcon icon={faCcVisa} className="visa-icon" />
        <FontAwesomeIcon icon={faCcMastercard} className="mastercard-icon" /> */}
      </div>
      <label className="b-form-label">Name on card</label>
      <div className="c-form-group">
        <input
          type="text"
          id="nameOnCard"
          className={`c-form-input ${
            formErrors.nameOnCard ? "invalid-input" : ""
          }`}
          name="nameOnCard"
          value={formData.nameOnCard}
          placeholder="Enter your credit card number"
          onChange={handleInputChange}
          required
        />
        {formErrors.nameOnCard && (
          <div className="error-message">{formErrors.nameOnCard}</div>
        )}
      </div>
      {/* ---------------------------------------------------- */}
      <label className="b-form-label">Card Number</label>
      <div className="c-form-group">
        <input
          type="text"
          id="card-number"
          className={`c-form-input ${
            formErrors.cardNumber ? "invalid-input" : ""
          }`}
          name="cardNumber"
          value={formData.cardNumber}
          placeholder="Enter your credit card number"
          onChange={handleInputChange}
          required
        />
        {formErrors.cardNumber && (
          <div className="error-message">{formErrors.cardNumber}</div>
        )}
      </div>
      {/* ---------------------------------------------------- */}
      <label className="b-form-label">Expiry date</label>
      <div className="c-form-group">
        <input
          type="text"
          id="expiry-date"
          className={`c-form-input ${
            formErrors.expiryDate ? "invalid-input" : ""
          }`}
          name="expiryDate"
          value={formData.expiryDate}
          placeholder="MM/YY"
          onChange={handleInputChange}
          required
        />
        {formErrors.expiryDate && (
          <div className="error-message">{formErrors.expiryDate}</div>
        )}
      </div>
      {/* ---------------------------------------------------- */}
      <label className="b-form-label">CVV</label>
      <div className="c-form-group">
        <input
          type="text"
          id="cvv"
          className={`c-form-input ${formErrors.cvv ? "invalid-input" : ""}`}
          name="cvv"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
          value={formData.cvv}
          onChange={handleInputChange}
          required
        />
        {formErrors.cvv && (
          <div className="error-message">{formErrors.cvv}</div>
        )}
      </div>

      {/* ---------------------------------------------------- */}

      <button
        className="c-form-button"
        type="button"
        onClick={handleBookClick}
        disabled={loading || bookingSuccess}
      >
        {loading ? "Booking...." : bookingSuccess ? "Booked" : "Book"}
      </button>
      {bookingSuccess && (
        <p
          className="text-success mt-3"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Booking successful!
        </p>
      )}
    </div>
  );
};

const PayCard = () => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light header-booking">
          <div className="container">
            <Link to="/" className="brand ">
              <h1 className="logo">clément</h1>
            </Link>
            <ul className="nav justify-content-end">
              <li className="item">
                <Link to="/login" className="brand">
                  Login
                </Link>
                <li className="item">
                  <Link to="/history" className="brand">
                    My booking
                  </Link>
                </li>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* PayCard content */}
      <MDBContainer fluid className="py-5 gradient-custom">
        <MDBRow className="d-flex justify-content-center ">
          <MDBCol md="4" lg="4" xl="4">
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
        <div className="text-center p-3" style={{ backgroundColor: "white" }}>
          &copy; {new Date().getFullYear()} Copyright |
          {
            " This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply."
          }
          <a className="text-dark" href="https://ClementHotel.com/">
            ClementHotel.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default PayCard;
