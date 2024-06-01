import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import slide1 from '../../assets/img/slide/slide1.webp'
import slide2 from '../../assets/img/slide/slide2.webp'
import slide3 from '../../assets/img/slide/slide3.webp'
import slide4 from '../../assets/img/slide/slide4.png'

function Slide() {
  return (

    <div style={{ marginTop: '-70px' }} id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" /> */}

      </div>
      <div className="carousel-inner" style={{ height: "40em" }}>
        {/* <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="Slide" />
        </div> */}
        <div className="carousel-item active">
          <img src={slide4} className="d-block w-100" alt="Slide" />
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="Slide" />
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="Slide" />
        </div>
      </div>
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button> */}
      {/* <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>



  )
}

export default Slide