import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className=" text-white" style={{backgroundColor:"#259b97"}}>
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-6 mb-4 text-center">
              <img
                src="https://quynhon.maiaresorts.com/wp-content/themes/maiaresort/images/maia_resorts_favicon.svg"
                alt="Logo"
                style={{ maxWidth: "100px" }}
              />
              <div>
              <p className="mt-3">
                Address: 77 An Dương Vương, Tp. Quy Nhơn, Tỉnh. Bình Định, Việt Nam
                
              </p>
              <p>
              Address: 249 Hà Huy Tập, Tp. Đà Nẵng, Việt Nam
              </p>
              </div>
              <p>Hotline: (+84) 256 2222 268</p>
              <p>Email: info@clementgroup.com</p>
            </div>
            <div className="col-lg-3 mb-2 ">
              <h5 className="mb-3 text-center">Connect with us</h5>
              <div className="d-flex justify-content-center">
                <a
                  className="btn btn-outline-light btn-floating me-2"
                  href="#!"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating me-2"
                  href="#!"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating me-2"
                  href="#!"
                >
                  <i className="fab fa-google"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating me-2"
                  href="#!"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-center py-3"
          style={{ backgroundColor: "#259b97",border:"" }}
        >
          &copy; {new Date().getFullYear()} Bản quyền thuộc về{" "}
          <a
            className="text-light"
            
            href="https://ClementHotel.com/"
          >
            ClementHotel.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
