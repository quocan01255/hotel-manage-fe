import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import {loadStripe} from '@stripe/stripe-js';
import { createBooking } from "../../services/api";

const PaymentForm = (props) => {
  const { totalRoomPrice, thanhtoan, reset, cart } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });



  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Clear the validation error for the current field
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const validate = () => {
    let isValid = true;
    const newFormErrors = {
      name: formData.name ? "" : "Please enter your name.",
      email: formData.email ? "" : "Please enter your email.",
      phone: formData.phone ? "" : "Please enter your phone number.",
      address: formData.address.trim() ? "" : "Please enter your address.",
      city: formData.city.trim() ? "" : "Please enter your city.",
      country: formData.country.trim() ? "" : "Please enter your country.",
    };
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newFormErrors.email = "Please enter a valid email address.";
    }

    // Phone number validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newFormErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (Object.values(newFormErrors).some((error) => error)) {
      setFormErrors(newFormErrors);
      isValid = false;
    }
    return isValid;
  };

  const handleBookClick = async () => {
    if (validate()) {
      if (cart.length > 0) {
        // Dispatch action to set user info in Redux Store
        // dispatch(payment(formData));
        // thanhtoan(formData);
        const reponse = await createBooking(formData.name, formData.email, totalRoomPrice, userId, formData.address, formData.phone, cart);
        navigate("/paycard", {
          state: {
            total: totalRoomPrice,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
          },
        });
        // reset()
      } else {
        toast('Cart is empty', {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };


  const makePayment = async()=>{ 
    if (validate()){
      const stripe = await loadStripe("pk_test_51Nmpx3FFgTolQ67WAOohfHnUim2LIRJ4MxWYYex3qlZEnKsg9U7oIdWbmkby3QD5k0ur8E1cSBIKETMjvF4uEGzy001uUgfWR4");

      const body = {
          products:cart
      }
      const headers = {
          "Content-Type":"application/json"
      }
      const response = await fetch("http://localhost:7000/api/create-checkout-session",{
          method:"POST",
          headers:headers,
          body:JSON.stringify(body)
      });
  
      const session = await response.json();
  
      const result = stripe.redirectToCheckout({ sessionId: session.id }); 
    
     
      if(result.error){
          console.log(result.error);
      }
      thanhtoan(formData);
      reset()
    }  
 
}


  return (
    <div className="c-payment-form">
      <div style={{ fontWeight: "600", fontSize: "20px" }}>Enter your information</div>
      <form>
        {/* ----------- */}
        {/* --------- */}
        <div className="c-form-group">
          <label htmlFor="name" className="c-form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className={`c-form-input ${formErrors.name ? "invalid-input" : ""
              }`}
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {formErrors.name && (
            <div className="error-message">{formErrors.name}</div>
          )}
        </div>
        {/* --------- */}
        <div className="c-form-group">
          <label htmlFor="email" className="c-form-label">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className={`c-form-input ${formErrors.email ? "invalid-input" : ""
              }`}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {formErrors.email && (
            <div className="error-message">{formErrors.email}</div>
          )}
        </div>
        {/* --------- */}
        <div className="c-form-group">
          <label htmlFor="phone" className="c-form-label">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className={`c-form-input ${formErrors.phone ? "invalid-input" : ""
              }`}
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          {formErrors.phone && (
            <div className="error-message">{formErrors.phone}</div>
          )}
        </div>
        {/* -------- */}
        <div className="c-form-group">
          <label htmlFor="address" className="c-form-label">
            Address
          </label>
          <input
            type="text"
            id="address"
            className={`c-form-input ${formErrors.address ? "invalid-input" : ""
              }`}
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          {formErrors.address && (
            <div className="error-message">{formErrors.address}</div>
          )}
        </div>
        {/* -------- */}
        <div className="c-form-group">
          <label htmlFor="city" className="c-form-label">
            City
          </label>
          <input
            type="text"
            id="city"
            className={`c-form-input ${formErrors.city ? "invalid-input" : ""}`}
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          {formErrors.city && (
            <div className="error-message">{formErrors.city}</div>
          )}
        </div>
        {/* ---------- */}
        <div className="c-form-group">
          <label htmlFor="country" className="c-form-label">
            Country
          </label>
          <input
            type="text"
            id="country"
            className={`c-form-input ${formErrors.country ? "invalid-input" : ""
              }`}
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          />
          {formErrors.country && (
            <div className="error-message">{formErrors.country}</div>
          )}
        </div>
        {/* ... Other form fields ... */}
        {/*button-form-fkl*/}
        <button
          type="button"
          className="btn btn-primary c-form-button"
          onClick={handleBookClick}          
        >
          Payment at hotel
        </button>

        {/* <button
          type="button"
          className="btn btn-primary c-form-button"
          onClick={makePayment}
        >
         Bank Transfer
        </button> */}
      </form>
    </div>
  );
};

export default PaymentForm;