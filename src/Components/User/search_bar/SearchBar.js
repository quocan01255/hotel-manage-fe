import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./searchbar.css";
import Validator from "../../../commons/validator";
import dayjs from 'dayjs';

function SearchBar(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(dayjs().add(1, 'day').toDate());

  useEffect(() => {
    var form = new Validator("#booking-form");
    form.onSubmit = function () {
      props.onSubmit(startDate, endDate);
    };
  });

  return (
    <div className="main searchbar-container">
      <form id="booking-form" className="search-form">
        <div className="form-group ">
          <div className="form-destination">
            <h4>Select date:</h4>
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
          <div className="form-submit">
            <input type="submit" className="submit" value="Check" />
          </div>
        </div>
      </form>
    </div>
  );

}

export default SearchBar;
