import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Link } from 'react-router-dom'
import './roomitem.css'

function RoomItem() {  
    return (
        <div className="row room">
            <div className='room__content'>
                <div className="col-4 room__img">
                    <img src="https://bookcore.backhotelengine.com/uploads/habitaciones/Semi_Detached_Villa-bedroom-01.jpg.480x360_q85_crop-smart.jpg"></img>
                </div>
                <div className="col-8 room__container">
                    <div className="room__title">GARDEN VILLA</div>
                    <div className="room__description">
                        <p>
                            Our entry level villa boasts the elegant and chic designs you’d expect from Fusion,
                            with an open-plan living; sleeping area with twin or king-size bed;
                            en-suite bathroom; indoor and outdoor lounge spaces, and a shared,
                            enclosed garden.
                        </p>
                    </div>
                    <div className="room__icon">
                        <i className="fa-solid fa-wifi"></i>
                        <i className="fa-solid fa-phone"></i>
                        <i className="fa-regular fa-snowflake"></i>
                        <i className="fa-solid fa-tv"></i>
                        <i className="fa-solid fa-shower"></i>
                    </div>
                </div>
                {/* <div className="col-3 room__btn">
                        <button className='btn btn-primary'>ADD</button>
                    </div> */}
            </div>
            <div className='room__detail'>
                <nav>
                    <div className="nav nav-tabs room__detail-navbar" id="nav-tab" role="tablist">
                        <button
                            className="nav-link active room__detail-navtab"
                            id="nav-home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-home"
                            type="button"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                        >
                            MAIA SUNDOWNER
                        </button>
                        <button
                            className="nav-link room__detail-navtab"
                            id="nav-profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile"
                            type="button"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                        >
                            MAIAMOUR
                        </button>
                        <button
                            className="nav-link room__detail-navtab"
                            id="nav-contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-contact"
                            type="button"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                        >
                            FLEXIBLE RATE
                        </button>
                    </div>
                </nav>
                <div className="tab-content room__tab" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active room__tab-description"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                    >
                        Rates are inclusive of:
                        <ul className='room__tab-list'>
                            <li>Daily Breakfast at Vi Restaurant</li>
                            <li>Optional daily individual treatment at Vẽla Spa or the choice of a family style lunch or dinner at Vi Restaurant</li>
                            <li>Complimentary usage of tennis court</li>
                            <li>Complimentary usage of kitchen facilities in Two-bedroom Garden Pool Villa (not inclusive of surcharge for cleaning service)</li>
                            <li>Nightly turn-down service</li>
                            <li>Welcome fruit & artisanal amenities</li>
                            <li>Complimentary minibar (replenished daily)</li>
                        </ul>
                        <div className='room__tab-booking'>
                            <span className='room_tab-price'>
                                7,000,000
                                <span style={{ fontSize: '16px' }}>đ</span>
                            </span>
                            <Link to="/homecart" className='btn btn-primary room_tab-btn'>ADD</Link>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade room__tab-description"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                    >
                        Stay one-night and receive:
                        <ul className='room__tab-list'>
                            <li>Stay one-night and receive:</li>
                            <li>One-time destination dining dinner or Once Upon a Table</li>
                            <li>One-time surprise gift upon departures</li>
                        </ul>
                        Stay minimum two-nights includes:
                        <ul className='room__tab-list'>
                            <li>One-time pre-dinner sunset cocktails</li>
                            <li>One-time destination dining dinner or Once Upon a Table</li>
                        </ul>
                        <div className='room__tab-booking'>
                            <span className='room_tab-price'>
                                8,000,000
                                <span style={{ fontSize: '16px' }}>đ</span>
                            </span>
                            <Link to="/homecart" className='btn btn-primary room_tab-btn'>ADD</Link>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade room__tab-description"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                    >
                        Room with flexible rate and includes:
                        <ul className='room__tab-list'>
                            <li>Daily half board or daily spa treatment for standard occupancy</li>
                            <li>Daily turndown service</li>
                            <li>Complimentary non-alcoholic minibar</li>
                        </ul>
                        <div className='room__tab-booking'>
                            <span className='room_tab-price'>
                                9,000,000
                                <span style={{ fontSize: '16px' }}>đ</span>
                            </span>
                            <Link to="/homecart" className='btn btn-primary room_tab-btn '>ADD</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RoomItem