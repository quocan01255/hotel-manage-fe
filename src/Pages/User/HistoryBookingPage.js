import React from 'react'
import HistoryBookingCard from '../../Components/User/HistoryBookingCard'

import { Link } from 'react-router-dom'
function HistoryBookingPage() {
  return (
    <>
      <div className='container'>
        <div className="backpage">
          <Link to="/bookingpage" >
            <i class="fa-solid fa-arrow-left"></i>
            Return
          </Link>
        </div>
        <h3 className='mt-5'>BILL LIST</h3>
        <HistoryBookingCard />
      </div>
    </>

  )
}

export default HistoryBookingPage
