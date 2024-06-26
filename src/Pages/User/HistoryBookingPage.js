import React from 'react'
import HistoryBookingCard from '../../Components/User/HistoryBookingCard'

import { Link } from 'react-router-dom'
function HistoryBookingPage() {
  return (
    <>
      <div className='container' style={{padding: '50px 0'}}>
        <div className="backpage">
          <Link to="/bookingpage" >
            <i className="fa-solid fa-arrow-left"></i>
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
