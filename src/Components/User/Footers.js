import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className=" text-white" style={{ backgroundColor: "#259b97" }}>
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-4 mb-4 text-center">
              <h5
                className="mb-3 text-center "
                style={{ fontSize: "20px", justifyContent: "flex-start" }}
              >
                Clement Hotel
              </h5>
              {/* <img
                src="https://quynhon.maiaresorts.com/wp-content/themes/maiaresort/images/maia_resorts_favicon.svg"
                alt="Logo"
                style={{ maxWidth: "100px" }}
              /> */}
              <div
                className=""
                style={{ margin: "40px" }}
              >
                <p className="mt-3">
                  Address: Quy Nhon, Binh Dinh, Vietnam
                </p>

                <p>Hotline: (+84) 123 4567 890</p>
                <p>Email: info@clementgroup.com</p>
              </div>
            </div>
            <div className="col-lg-4 mb-2 ">
              <h5 className="mb-3 text-center" style={{ fontSize: "20px" }}>
                Connect with us
              </h5>
              <div
                className="d-flex justify-content-center"
                style={{ margin: "40px" }}
              >
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
            <div className="col-lg-4 mb-2 ">
              <h5 className="mb-3 text-center" style={{ fontSize: "20px" }}>
                Pay With
              </h5>
              <div
                className="d-flex justify-content-center"
                style={{ margin: "40px" }}
              >
                <img
                  src="https://thecaphotel.com/public/uploads/settings/20210509/855d2451a6c93f98bd947bf3c95b3c56.png"
                  style={{ height: "20px" }}
                />
              </div>
              <a
                href="http://online.gov.vn/Home/WebDetails/72366"
                target="_blank"
              >
                <img
                  alt=""
                  title=""
                  src="https://thecaphotel.com/public/st/images/logoSaleNoti.png"
                  style={{ height: "50px", width: "auto", margin: "10px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
