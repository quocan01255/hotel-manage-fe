import SeachBar from "../../Components/User/search_bar/SearchBar"
import ListRooms from "../../Components/User/list_rooms/ListRooms"
import Header from "../../Components/User/Header"
import Login from "../../Components/form_login/Login"
import Register from "../../Components/form_register/Register"
import Footers from "../../Components/User/Footers"
import { useEffect, useState } from "react";

function BookingPage() {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/rooms')
            .then((response) => response.json())
            .then((rooms) => {
                setRooms(rooms)
                console.log(rooms)
            })
            .catch((error) => {

            });
    }, [])

    return (
        <div style={{ backgroundColor: '#f8f8f8' }}>
            <div style={{ backgroundColor: '#f8f8f8', margin: '0 auto' }} className='container'>
                <SeachBar />
                <ListRooms rooms={rooms}/>
            </div>
            <Footers />
        </div>
    )
}

export default BookingPage