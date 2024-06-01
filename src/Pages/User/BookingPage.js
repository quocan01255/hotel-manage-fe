import SearchBar from "../../Components/User/search_bar/SearchBar"
import ListRooms from "../../Components/User/list_rooms/ListRooms"
import Footers from "../../Components/User/Footers"
import Headerbooking from '../../Components/User/header_booking/Headerbooking'
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Search, resetmessage } from "../../redux/actions/SearchAction";
import { resetCartMessage } from "../../redux/actions/cartActions"
import formatDatetime from "../../util/DatetimeUtil";
import { getAvailableRooms, searchRoom, addCartItem } from "../../services/api";
import dayjs from 'dayjs';

function BookingPage() {
    const [rooms, setRooms] = useState([])
    const dispatch = useDispatch()
    const getdata = useSelector((state) => state.SearchReducer.rooms);
    const message = useSelector((state) => state.SearchReducer.message);
    const cartState = useSelector(state => state.cartReducer);
    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(dayjs().add(1, 'day').toDate());
    const [cart, setCart] = useState([]);
    const userId = localStorage.getItem("id");
  
    const showMsgBox = useCallback((msg) => {
      toast(msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }, [])
    //Call api and get data
    const fetchRooms = async () => {
        try {
            const roomsData = await getAvailableRooms();
            // console.log(roomsData)
            setRooms(roomsData)
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        fetchRooms();
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

    const onSubmit = async (check_in, check_out) => {
        setCheckIn(check_in);
        setCheckOut(check_out);
        fetchRooms();
        alert("hello")
    }

    const handleAdd = useCallback(
        async (id) => {
            if (userId) {
                console.log(checkIn, checkOut)
                const response = await addCartItem(userId, id, checkIn, checkOut);
                showMsgBox(response.message);
            } else {
                showMsgBox("Please login to add room!")
            }
        },
        [checkIn, checkOut]
    );


    return (
        <>
            <ToastContainer />
            <Headerbooking />
            <div style={{ backgroundColor: '#f8f8f8', paddingTop: '100px' }}>
                <div style={{ backgroundColor: '#f8f8f8', margin: '0 auto' }} className='container'>
                    <SearchBar onSubmit={onSubmit} />
                    <ListRooms rooms={rooms} handleAdd={handleAdd} />
                </div>
                <Footers />
            </div>
        </>
    )
}

export default BookingPage