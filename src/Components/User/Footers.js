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
                style={{ fontSize: "30px", justifyContent: "flex-start" }}
              >
                Clément Hotel
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
                  Address: 77 An Dương Vương, Tp. Quy Nhơn, Tỉnh. Bình Định,
                  Việt Nam
                </p>
                <p>Address: 249 Hà Huy Tập, Tp. Đà Nẵng, Việt Nam</p>

                <p>Hotline: (+84) 256 2222 268</p>
                <p>Email: mailto:info@clementgroup.com</p>
              </div>
            </div>
            <div className="col-lg-4 mb-2 ">
              <h5 className="mb-3 text-center" style={{ fontSize: "30px" }}>
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
              <h5 className="mb-3 text-center" style={{ fontSize: "30px" }}>
                Pay With
              </h5>
              <div
                className="d-flex justify-content-center"
                style={{ margin: "40px" }}
              >
                <img
                  src="https://thecaphotel.com/public/uploads/settings/20210509/855d2451a6c93f98bd947bf3c95b3c56.png"
                  style={{ height: "30px" }}
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
        <div
          className="text-center py-4"
          style={{ backgroundColor: "#259b97" }}
        >
          &copy; {new Date().getFullYear()} Bản quyền thuộc về{" "}
          <a className="text-light" href="https://clementhotel.com/">
            ClementHotel.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
