import SeachBar from "../../Components/User/search_bar/SearchBar"
import ListRooms from "../../Components/User/list_rooms/ListRooms"
import Footers from "../../Components/User/Footers"
import Headerbooking from '../../Components/User/header_booking/Headerbooking'
import { useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux"

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Search, resetmessage } from "../../redux/actions/SearchAction";
function BookingPage() {
    const [rooms, setRooms] = useState([])
    const dispatch = useDispatch()
    const getdata = useSelector((state) => state.SearchReducer.rooms);
    const message = useSelector((state) => state.SearchReducer.message);
    useEffect(() => {
        fetch('http://localhost:3001/rooms')
            .then((response) => response.json())
            .then((rooms) => {
                setRooms(rooms)
            })
            .catch((error) => {

            });

          
    }, [])

    useEffect(() => {
        setRooms(getdata)
       
    }, [getdata])  

    useEffect(() => {
        if(message){
            toast.success(message);
        }
        dispatch (resetmessage())
       
       
    }, [message])

    const onSubmit=(data)=>{
        dispatch(Search(data))
    }
   

    
    return (
        <>
         <ToastContainer/>
            <Headerbooking />
            <div style={{ backgroundColor: '#f8f8f8', paddingTop: '30px'}}>
                <div style={{ backgroundColor: '#f8f8f8', margin: '0 auto' }} className='container'>
                    <SeachBar onSubmit={onSubmit} />
                    <ListRooms rooms={rooms} />
                </div>
                <Footers />
            </div>
        </>
    )
}

export default BookingPage