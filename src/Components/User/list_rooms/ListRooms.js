import { useState, useCallback, useEffect } from "react";
import RoomItem from "../room_item/RoomItem";
import './listrooms.css'

function ListRooms() {
    const [priceType, setPriceType] = useState('VND')
    const [rooms, setRooms] = useState([])

    const handleSelect = useCallback((e) => {
        setPriceType(e.target.value)
    })

    useEffect(() => {
        fetch('http://localhost:3000/rooms')
            .then((response) => response.json())
            .then((data) => {
                setRooms(data)
            })
            .catch((error) => {

            });
    }, [])

    return (
        <>
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
            />)}
        </>
    )
}

export default ListRooms