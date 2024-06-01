import React from "react";
import iconStay from '../../assets/icon/Stay.svg'
import iconUnit from '../../assets/icon/unit.svg'
import iconSize from '../../assets/icon/size.svg'
import iconView from '../../assets/icon/view.svg'
import room1 from '../../assets/img/room/room1.jpg'
import room2 from '../../assets/img/room/room2.jpg'
import room3 from '../../assets/img/room/room3.jpg'
import room4 from '../../assets/img/room/room4.jpg'
import room5 from '../../assets/img/room/room5.jpg'

function IteamVilla() {
  return (
    <div className="container">
      <div
        className="row mt-5 mb-5  bg-muted"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-sm-6 ">
          <img
            src={iconStay}
            alt=""
            width="20%"
          />

          <h3 className="display-4 mt-2 pt-2">Be where the good life is</h3>

          <p>
            Designed to imbue the familiar while being completely transportive,
            Clément offers a collection of rooms categories to suit your
            vacation needs. Each place is tastefully designed to provide a touch
            of familiar coupled with international sophistication and cosiness
            while offering dramatic views of Phuong Mai Bay.
          </p>
        </div>
      </div>

      {/* demo */}

      <div className="row">
        <div className="col-sm-7 ">
          <h1 className="display-4 mt-5 pt-5">SUPERIOR DOUB</h1>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item">
              <img
                src={iconUnit}
                width="25px"
              />{" "}
              1 Queen Bed
            </li>
            <li className="list-group-item">
              <img
                src={iconSize}
                width="25px"
              />{" "}
              1 Bathroom
            </li>
            <li className="list-group-item">
              <img
                src={iconView}
                width="25px"
              />{" "}
              City View
            </li>
          </ul>
        </div>
        <div className="col-sm-5">
          <img
            src={room1}
            alt=""
            width="100%"
          />
        </div>
      </div>

      <div className="row mt-5 mb-5 pt-5 pb-5">
        {/* order-lg-2  */}
        <div className="col-sm-7 order-lg-2">
          <h1 className="display-4 mt-5 pt-5">SUPERIOR TWIN</h1>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item">
              <img
                src={iconUnit}
                width="25px"
              />{" "}
              2 Single Beds
            </li>
            <li className="list-group-item">
              <img
                src={iconSize}
                width="25px"
              />{" "}
              1 Bathroom
            </li>
            <li className="list-group-item">
              <img
                src={iconView}
                width="25px"
              />{" "}
              City View
            </li>
          </ul>
        </div>
        <div className="col-sm-5">
          <img
            src={room2}
            alt=""
            width="100%"
          />
        </div>
      </div>

      <div className="row mt-5 mb-5 pt-5 pb-5">
        <div className="col-sm-7 ">
          <h1 className="display-4 mt-5 pt-5">DELUXE DOUBLE - CITY VIEW</h1>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item">
              <img
                src={iconUnit}
                width="25px"
              />{" "}
              1 Queen Bed
            </li>
            <li className="list-group-item">
              <img
                src={iconSize}
                width="25px"
              />{" "}
              1 Bathroom
            </li>
            <li className="list-group-item">
              <img
                src={iconView}
                width="25px"
              />{" "}
              City View
            </li>
          </ul>
        </div>
        <div className="col-sm-5">
          <img
            src={room3}
            alt=""
            width="100%"
          />
        </div>
      </div>

      <div className="row mt-5 mb-5 pt-5 pb-5">
        {/* order-lg-2  */}
        <div className="col-sm-7 order-lg-2">
          <h1 className="display-4 mt-5 pt-5">DELUXE TWIN - CITY VIEW</h1>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item">
              <img
                src={iconUnit}
                width="25px"
              />{" "}
              2 Single Beds
            </li>
            <li className="list-group-item">
              <img
                src={iconSize}
                width="25px"
              />{" "}
              1 Bathroom
            </li>
            <li className="list-group-item">
              <img
                src={iconView}
                width="25px"
              />{" "}
              City View
            </li>
          </ul>
        </div>
        <div className="col-sm-5">
          <img
            src={room4}
            alt=""
            width="100%"
          />
        </div>
      </div>

      <div className="row mt-5 mb-5 pt-5 pb-5">
        <div className="col-sm-7 ">
          <h1 className="display-4 mt-5 pt-5">DELUXE DOUBLE - SEA VIEW</h1>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item">
              <img
                src={iconUnit}
                width="25px"
              />{" "}
              1 Queen Bed
            </li>
            <li className="list-group-item">
              <img
                src={iconSize}
                width="25px"
              />{" "}
              1 Bathroom
            </li>
            <li className="list-group-item">
              <img
                src={iconView}
                width="25px"
              />{" "}
              Sea View
            </li>
          </ul>
        </div>
        <div className="col-sm-5">
          <img
            src={room5}
            alt=""
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default IteamVilla;
