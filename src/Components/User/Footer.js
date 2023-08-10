import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div className="text-center p-3" style={{ backgroundColor: "white" }}>
        &copy; {new Date().getFullYear()} Copyright |
        {
          " This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply."
        }
        <a className="text-dark" href="https://ClementHotel.com/">
          ClementHotel.com
        </a>
      </div>
    </MDBFooter>
  );
}
