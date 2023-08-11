import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './searchbar.css'
import formatDatetime from '../../../util/DatetimeUtil';
function SeachBar() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [quantity, setQuantity] = useState(0)
    const onchangeQuantily = (e) => {
        var value = e.target.value;
        setQuantity(value);
    }

    const getThu = () => {
        var thongtin = "";
        thongtin += " /ngày đến :" + startDate;
        thongtin += " ngày đi :" + endDate;
        thongtin += "/số lượng  :" + quantity;
        return thongtin;

    }

    const submitForm = (event) => {
        console.log(getThu());
        event.preventDefault();
        const data = {
            checkin: formatDatetime(startDate, "DD/MM/YYYY"),
            checkout: formatDatetime(endDate, "DD/MM/YYYY"),
            quantity: quantity,
        }
        fetch("http://localhost:3000/room", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(console.log);
    };



    return (
        <div className="main searchbar-container" >
            <form id="booking-form" className="search-form" method="POST">
                <div className="form-group ">
                    <div className="form-destination">
                        {/* <label htmlFor="destination">Destination</label>
                            <input type="text" id="destination" name="destination" placeholder="EG. HAWAII" /> */}
                        <h4>Search for room:</h4>
                    </div>
                    <div className="form-date-from form-icon">
                        <label htmlFor="date_from">CHECK-IN</label>
                        <div className='input-container'>
                            <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
                            <i className="fa-solid fa-arrow-right-to-bracket input-icon"></i>
                        </div>
                    </div>
                    <div className="form-date-to form-icon">
                        <label htmlFor="date_to">CHECK-OUT</label>
                        <div className='input-container'>
                            <DatePicker dateFormat="dd/MM/yyyy" selected={endDate} onChange={(date) => setEndDate(date)} />
                            <i className="fa-solid fa-arrow-right-from-bracket input-icon"></i>
                        </div>
                    </div>
                    <div className="form-quantity form-icon">
                        <label htmlFor="quantity">QUANTITY</label>
                        <div className='input-container'>
                            {/* <input style={{width: '70%'}} type="number" name="quantity" id="quantity" defaultValue={0} min={0} max={10} className="nput-text qty text" /> */}
                            <select className="" onChange={onchangeQuantily}>
                                <option value="1" defaultValue>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                            <i className="fa-solid fa-user input-icon"></i>
                        </div>
                    </div>
                    <div className="form-date-to form-icon">
                        <label htmlFor="date_to">PROMOTIONAL CODE</label>
                        <input type="text" className="input-promo"></input>
                    </div>
                    <div className="form-submit">
                        <input onClick={(event) => submitForm(event)} type="submit" className="submit" value="Check" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SeachBar