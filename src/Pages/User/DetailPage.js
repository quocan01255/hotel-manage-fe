import React from 'react'
import { Link } from 'react-router-dom'
import Detail from '../../Components/Detail'

function DetailPage() {
  return (
    <div className='container'>
        <div className="backpage">
            <Link to="/history" >
              <i class="fa-solid fa-arrow-left"></i>
              Return
            </Link>
          </div>  
          <h3 className='mt-5'>DETAIL BILL</h3>        
          <Detail/>       
       
    </div>
  )
}

export default DetailPage
