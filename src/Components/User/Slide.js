import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import slide1 from '../../assets/img/slide1.png'
function Slide() {
    return (

        <div style={{marginTop: '-70px'}} id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
         
        </div>
        <div className="carousel-inner" style={{height:"40em"}}>
          <div className="carousel-item active">
            <img src="https://quynhon.maiaresorts.com/wp-content/uploads/2020/08/Semi-Detached-Villa-bedroom-02_resize.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://quynhon.maiaresorts.com/wp-content/uploads/2020/08/DJI_0789_resize.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://quynhon.maiaresorts.com/wp-content/uploads/2020/08/DJI_0193_resize.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://quynhon.maiaresorts.com/wp-content/uploads/2021/04/MAQ0491.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      


    )
}

export default Slide