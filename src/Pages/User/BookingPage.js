import SeachBar from "../../Components/User/search_bar/SearchBar"
import ListRooms from "../../Components/User/list_rooms/ListRooms"
import Footers from "../../Components/User/Footers"
import Headerbooking from '../../Components/User/header_booking/Headerbooking'
import { useEffect, useState } from "react";

function BookingPage() {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/rooms')
            .then((response) => response.json())
            .then((rooms) => {
                setRooms(rooms)
            })
            .catch((error) => {

            });
    }, [])

    return (
        <>
            <Headerbooking />
            <div style={{ backgroundColor: '#f8f8f8', paddingTop: '30px'}}>
                <div style={{ backgroundColor: '#f8f8f8', margin: '0 auto' }} className='container'>
                    <SeachBar />
                    <ListRooms rooms={rooms} />
                </div>
                <Footers />
            </div>
        </>
    )
}

export default BookingPage