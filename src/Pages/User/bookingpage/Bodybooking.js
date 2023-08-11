import Headerbooking from "./Headerbooking";
import ListRooms from "../../../Components/User/ListRooms";
import SeachBar from "../../../Components/User/search_bar/SearchBar";
import React from 'react'

function Bodybooking() {
  return (
    <div>
        <Headerbooking/>
        <SeachBar/>
        <ListRooms/>
    
    </div>
  )
}

export default Bodybooking