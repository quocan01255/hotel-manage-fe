import React from 'react'
import room1 from '../../assets/img/room/room1.jpg'
import room2 from '../../assets/img/room/room2.jpg'
import room3 from '../../assets/img/room/room3.jpg'
import room4 from '../../assets/img/room/room4.jpg'
import room5 from '../../assets/img/room/room9.jpg'
import room6 from '../../assets/img/room/room10.jpg'

function Villa() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5  bg-muted motsp  ">
        <div className="col-sm-4 hinh">
          <img
            src={room1}
            alt=""
            width="416px"
            height="226px"
          />
        </div>
        <div className="col-sm-4 hinh">
          <img
            src={room2}
            alt=""
            width="416px"
            height="226px"
          />
        </div>
        <div className="col-sm-4 hinh">
          <img
            src={room3}
            alt=""
            width="416px"
            height="226px"
          />
        </div>
      </div>

      <div className="row mt-5 mb-5  bg-muted motsp  ">
        <div className="col-sm-4 hinh">
          <img
            src={room4}
            alt=""
            width="416px"
            height="226px"
          />
        </div>
        <div className="col-sm-4 hinh">
          <img
            src={room5}
            alt=""
            width="416px"
            height="226px"
          />
        </div>
        <div className="col-sm-4 hinh">
          <img
            src={room6}
            alt=""
            width="416px"
            height="226px"
          />
        </div>
      </div>
    </div>
  )
}

export default Villa
