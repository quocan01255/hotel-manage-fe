import React from 'react'
import explore1 from '../../assets/img/explore/explore1.webp'
import explore2 from '../../assets/img/explore/explore2.webp'
import explore3 from '../../assets/img/explore/explore3.webp'

function Explore() {
  return (
    <div className="container hover">
      <div className="row mt-5 mb-5  bg-muted motsp  ">
      <div className="col-sm-4 hinh">
          <img
            src={explore1}
            width="416px"
            height="226px"
          />
        </div>
        <div className="col-sm-4 hinh">
          <img
            src={explore2}
            alt=""
            width="416px"
            height="226px"
          />
        </div>
        <div className="col-sm-4 hinh">
          <img
            src={explore3}
            alt=""
            width="416px"
            height="226px"
          />
        </div>
        
        
      </div>
    </div>
  
  )
}

export default Explore
