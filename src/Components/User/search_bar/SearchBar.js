import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./searchbar.css";
import formatDatetime from "../../../util/DatetimeUtil";
import Validator from "../../../commons/validator";

function SeachBar(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [quantity, setQuantity] = useState(0);


  const onchangeQuantily = (e) => {
    var value = e.target.value;
    setQuantity(value);
  };
 
  useEffect(() => {
    var form = new Validator("#booking-form");
    form.onSubmit = function () {
      // dispatch(Search(startDate,endDate,quantity))
      const data = {
        startDate: formatDatetime(startDate, "DD/MM/YYYY"),
        endDate: formatDatetime(endDate, "DD/MM/YYYY"),
        quantity: quantity,
      };
      props.onSubmit(data);
    };
  });

  return (
    <div className="main searchbar-container">
      <form id="booking-form" className="search-form">
        <div className="form-group ">
          <div className="form-destination">
            <h4>Search for room:</h4>
          </div>
          <div className="form-date-from form-icon">
            <label htmlFor="date_from">CHECK-IN</label>
            <div className="input-container">
              <DatePicker
                 minDate={new Date()}
                 maxDate={endDate}
                dateFormat="dd/MM/yyyy"
                selected={startDate}              
                onChange={(date) => setStartDate(date)}
              />
             
              <i className="fa-solid fa-arrow-right-to-bracket input-icon"></i>
            </div>
          </div>
          <div className="form-date-to form-icon">
            <label htmlFor="date_to">CHECK-OUT</label>
            <div className="input-container">
              <DatePicker
                minDate={startDate}
                dateFormat="dd/MM/yyyy"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
              <i className="fa-solid fa-arrow-right-from-bracket input-icon"></i>
            </div>
          </div>
          <div className="form-quantity form-icon">
            <label htmlFor="quantity">QUANTITY</label>
            <div className="input-container">
              <select className="" onChange={onchangeQuantily}>
                <option value="1" defaultValue>
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
              <i className="fa-solid fa-user input-icon"></i>
            </div>
          </div>         
          <div className="form-submit">
            <input type="submit" className="submit" value="Check" />
          </div>
        </div>
        </form>
    </div>
  );
    
}

export default SeachBar;
