import SeachBar from "../../Components/User/search_bar/SearchBar"
import ListRooms from "../../Components/User/list_rooms/ListRooms"
import Footers from "../../Components/User/Footers"
import Headerbooking from '../../Components/User/header_booking/Headerbooking'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Search, resetmessage } from "../../redux/actions/SearchAction";
import { resetCartMessage } from "../../redux/actions/cartActions"
import formatDatetime from "../../util/DatetimeUtil";
function BookingPage() {
    const [rooms, setRooms] = useState([])
    const [startDate, setStartDates] = useState(new Date());
    const dispatch = useDispatch()
    const getdata = useSelector((state) => state.SearchReducer.rooms);
    const message = useSelector((state) => state.SearchReducer.message);
    const cartState = useSelector(state => state.cartReducer)
    const startDates = formatDatetime(startDate, "DD/MM/YYYY")
    // console.log(startDates);
    //Call api and get data
    useEffect(() => {
        fetch('http://localhost:3001/rooms')
            .then((response) => response.json())
            .then((rooms) => {
                const room = rooms.filter((room) => room.checkin >= startDates )
                setRooms(room)
                // console.log(room);
            })

            .catch((error) => {
            });
    }, [])


    useEffect(() => {
        setRooms(getdata)
    }, [getdata])

    useEffect(() => {
        if (message) {
            toast.success(message);
            dispatch(resetmessage())
        }
    }, [message])

    useEffect(() => {
        if (cartState.message) {
            toast(cartState.message, {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            dispatch(resetCartMessage())
        }
    }, [cartState])

    const onSubmit = (data) => {
        dispatch(Search(data))
    }

    return (
        <>
            <ToastContainer />
            <Headerbooking />
            <div style={{ backgroundColor: '#f8f8f8', paddingTop: '100px' }}>
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