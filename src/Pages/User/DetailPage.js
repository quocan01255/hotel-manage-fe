import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import DetailBill from '../../Components/DetailBill';
import { getBookingById, getBookingItem } from '../../services/api';

function DetailPage() {
  const [bookings, setBookings] = useState([]);
  const [data, setData] = useState();
  const { id } = useParams();
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
    <div className='container'>
      <div className="backpage">
        <Link to="/history" >
          <i class="fa-solid fa-arrow-left"></i>
          Return
        </Link>
      </div>
      {/* <h3 className='mt-5 mb-5'>DETAIL BILL</h3> */}
      <div className='row'>
        <div className='col-6'>
          {/* <Detail bookings={bookings} /> */}

        </div>
        <div className='col-6'>
          {/* <RoomBoking bookings={bookings}/> */}
        </div>
      </div>
      {data ? (
        <DetailBill bookings={bookings} data={data} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default DetailPage
