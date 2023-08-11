import React from 'react'
import Header from '../components/user/Header'
import { Outlet } from 'react-router-dom'
import Footers from '../components/user/Footers'

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
