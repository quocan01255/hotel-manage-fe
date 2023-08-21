import SeachBar from "../../Components/User/search_bar/SearchBar"
import ListRooms from "../../Components/User/list_rooms/ListRooms"
import Footers from "../../Components/User/Footers"
import Headerbooking from '../../Components/User/header_booking/Headerbooking'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Search, resetmessage } from "../../redux/actions/SearchAction";
function BookingPage() {
    const [rooms, setRooms] = useState([])
    const [showAddNotify, setShowAddNotify] = useState(false)
    const dispatch = useDispatch()
    const getdata = useSelector((state) => state.SearchReducer.rooms);
    const message = useSelector((state) => state.SearchReducer.message);
    const cartState = useSelector(state => state.cartReducer)
    //gọi dữ liệu lên
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
        toast.clearWaitingQueue()
        if (message && showAddNotify === false) {
            toast.success(message);
            dispatch(resetmessage())
        } else {
            if (cartState.message !== '' && showAddNotify === true) {
                toast(cartState.message, {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    toastId: "message"
                });
            }
        }
    })



    const onSubmit = (data) => {
        dispatch(Search(data))
    }



    return (
        <>
            <ToastContainer />
            <Headerbooking />
            <div style={{ backgroundColor: '#f8f8f8', paddingTop: '30px' }}>
                <div style={{ backgroundColor: '#f8f8f8', margin: '0 auto' }} className='container'>
                    <SeachBar onSubmit={onSubmit} handleNotify={() => setShowAddNotify(false)}/>
                    <ListRooms rooms={rooms} handleNotify={() => setShowAddNotify(true)}/>
                </div>
                <Footers />
            </div>
        </>
    )
}

export default BookingPage