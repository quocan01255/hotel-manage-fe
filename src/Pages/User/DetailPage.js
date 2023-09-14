import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import DetailBill from '../../Components/DetailBill';

function DetailPage() {
  const [bookings, setBookings] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:3001/bookings")
      .then((response) => response.json())
      .then((booking) => {
        const phong = booking.filter((item) => item.id == id)

        setBookings(phong);
      })
  }, [])
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
      <DetailBill bookings={bookings}/>
     



    </div>
  )
}

export default DetailPage
