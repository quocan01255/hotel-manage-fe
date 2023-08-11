import React from 'react'
import Header from '../Components/User/Header'
import { Outlet } from 'react-router-dom'
import Footers from '../Components/User/Footers'

function LayoutUser() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footers/>
    </div>
  )
}

export default LayoutUser
