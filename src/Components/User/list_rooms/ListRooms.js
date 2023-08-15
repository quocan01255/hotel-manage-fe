import { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { add } from '../../../redux/actions/cartActions'
import RoomItem from "../room_item/RoomItem";
import './listrooms.css'

function ListRooms() {
    const cartState = useSelector(state => state.cartReducer)
    const authState = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const [priceType, setPriceType] = useState('VND')
    const [rooms, setRooms] = useState([])
    const [showNotify, setShowNotify] = useState(false)

    const handleSelect = useCallback((e) => {
        setPriceType(e.target.value)
    }, [])

    console.log(cartState.guestCart)
    useEffect(() => {
        fetch('http://localhost:3001/rooms')
            .then((response) => response.json())
            .then((data) => {
                setRooms(data)
            })
            .catch((error) => {

            });
    }, [])

    const handleAdd = useCallback((id) => {
        const loggedIn = localStorage.getItem("loggedIn")
        if (!loggedIn) {
            dispatch(add(id, false, null))
            setShowNotify(true)
        } else {
            const user = localStorage.getItem("user")
            dispatch(add(id, true, user.id))
            setShowNotify(true)
        }

    }, [authState, dispatch])

    useEffect(() => {
        if (showNotify) {
            if (cartState.message !== '') {
                toast(cartState.message, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    })

    return (
        <>
            <ToastContainer />
            <div className="select-container">
                <div className="select-content">
                    <select className="price-select" onChange={handleSelect}>
                        <option value="VND" defaultValue>Vietnamese Dong(đ)</option>
                        <option value="USD">US Dollar($)</option>
                    </select>
                    <i className="fa-solid fa-angle-down select-icon"></i>
                </div>
            </div>
            {rooms.map(room => <RoomItem
                key={room.id}
                idTab={room.id}
                priceType={priceType}
                name={room.name}
                detail={room.detail}
                description={room.description}
                price={room.price}
                priceSale={room.priceSale}
                img={room.img}
                addRoom={handleAdd}
            />)}
        </>
    )
}

export default ListRooms