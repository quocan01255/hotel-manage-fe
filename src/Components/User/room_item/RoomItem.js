import { useCallback } from "react";
import "./roomitem.css";
import { useDispatch, useSelector } from "react-redux";


function RoomItem({
  idTab,
  priceType,
  name,
  detail,
  description,
  price,
  img,
  addRoom,
}) {
  const handleClick = () => {
    addRoom(idTab);
  };

  return (
    <div className="row room">
      <div className="room__content">
        <div className="col-4 room__img">
          <img src={img}></img>
        </div>
        <div className="col-8 room__container">
          <div className="room__title">{name}</div>
          <div className="room__description">
            <p>{detail}</p>
          </div>
          <div className="room__icon">
            <i className="fa-solid fa-wifi"></i>
            <i className="fa-solid fa-phone"></i>
            <i className="fa-regular fa-snowflake"></i>
            <i className="fa-solid fa-tv"></i>
            <i className="fa-solid fa-shower"></i>
          </div>
        </div>

      </div>
      <div className="room__detail">
        <nav>
          <div
            className="nav nav-tabs room__detail-navbar"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link active room__detail-navtab"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target={`#nav-home${idTab}`}
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              BEST AVAILABLE RATE
            </button>
          </div>
        </nav>
        <div className="tab-content room__tab" id="nav-tabContent">
          <div
            className="tab-pane fade show active room__tab-description"
            id={`nav-home${idTab}`}
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            Room with available rate and includes:
            <ul className="room__tab-list">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="room__tab-booking">
              {priceType === "VND" ? (
                <span className="room_tab-price">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(price)}
                </span>
              ) : (
                <span className="room_tab-price">
                  {/* {(price / 23805.6).toFixed(2)} */}
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "USD",
                  }).format((price / 23805.6).toFixed(2))}
                </span>
              )}
              <button
                className="btn btn-primary room_tab-btn"
                onClick={handleClick}
              >
                ADD
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RoomItem;
