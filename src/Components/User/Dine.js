import React from "react";
import restaurant1 from '../../assets/img/restaurant/restaurant1.webp'
import restaurant2 from '../../assets/img/restaurant/restaurant2.webp'
import restaurant3 from '../../assets/img/restaurant/restaurant3.webp'

function Dine() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5  bg-muted motsp  ">
        <div className="col-sm-4 hinh">
          <img
            src={restaurant1}
            alt=""
            width="416px"
            height="226px"
          />
        </div>
        <div className="col-sm-4 hinh">
          <img
            src={restaurant2}
            alt=""
            width="416px"
            height="226px"
          />
        </div>
        <div className="col-sm-4 hinh">
          <img
            src={restaurant3}
            alt=""
            width="416px"
            height="226px"
          />
        </div>
        
      </div>
    </div>
  );
}

export default Dine;
