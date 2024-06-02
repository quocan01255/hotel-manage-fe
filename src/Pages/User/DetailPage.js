import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DetailBill from '../../Components/DetailBill';
import { getBookingById, getBookingItem } from '../../services/api';
import { Bars } from 'react-loader-spinner';

function DetailPage() {
  const [bookings, setBookings] = useState([]);
  const [data, setData] = useState();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:3001/bookings")
  //     .then((response) => response.json())
  //     .then((booking) => {
  //       const phong = booking.filter((item) => item.id == id)

  //       setBookings(phong);
  //     })
  // }, [])

  const fetchDataBooking = async () => {
    const response = await getBookingById(id)
    // console.log(response)
    setData(response);
  }

  const fetchData = async () => {
    const response = await getBookingItem(id)
    setBookings(response);
  }

  useEffect(() => {
    fetchDataBooking();
    fetchData();
  }, [id])

  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <div className="backpage">
        <Link to="/history" >
          <i className="fa-solid fa-arrow-left"></i>
          Return
        </Link>
      </div>
      {data ? (
        <DetailBill bookings={bookings} data={data} />
      ) : (
        <div className="d-flex justify-content-center p-5">
          <Bars
            height="80"
            width="80"
            color="#259b97"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </div>
  )
}

export default DetailPage
