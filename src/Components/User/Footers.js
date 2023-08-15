import React, { Component } from "react";

class Footers extends Component {
  render() {
    return (
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f" />
            </a>
            {/* Twitter */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter" />
            </a>
            {/* Google */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google" />
            </a>
            {/* Instagram */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram" />
            </a>
          </section>
          {/* Section: Social media */}
        </div>

        <div>
          <footer className="bg-light text-center text-lg-start">
            {/* Grid container */}
            <div className="container p-4">
              {/*Grid row*/}
              <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <img
                    src="https://quynhon.maiaresorts.com/wp-content/themes/maiaresort/images/maia_resorts_favicon.svg"
                    alt=""
                    width="30%"
                  />

                  {/* <h5 className="text-uppercase">Footer text</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iste atque ea quis molestias. Fugiat pariatur maxime quis
                    culpa corporis vitae repudiandae aliquam voluptatem veniam,
                    est atque cumque eum delectus sint!
                  </p> */}
                </div>
                {/*Grid column*/}
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <p>
                    <p>
                      Địa chỉ: 77 An Dương Vương, Tp. Quy Nhơn, Tỉnh. Bình Định,
                      Việt Nam
                    </p>
                    <p> Hotline: (+84) 256 2222 268 </p>
                    <p> Email: info@clementgroup.com </p>
                  </p>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}

                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            <div
              className="text-center p-3"
              style={{ backgroundColor: "white" }}
            >
              &copy; {new Date().getFullYear()} Copyright |
              {
                " This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply."
              }
              <a className="text-dark" href="https://ClementHotel.com/">
                ClementHotel.com
              </a>
            </div>
            {/* Copyright */}
          </footer>
        </div>
        {/* Grid container */}
      </footer>
    );
  }
}

export default Footers;


