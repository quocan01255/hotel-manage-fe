import { useState, useCallback } from "react";
import RoomItem from "../room_item/RoomItem";
import './listrooms.css'

function ListRooms() {
    const [priceType, setPriceType] = useState('VND')

    const handleSelect = useCallback((e) => {
        setPriceType(e.target.value)
    })
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
            <RoomItem idTab = {1} priceType={priceType} />
            <RoomItem idTab = {2} priceType={priceType} />
            <RoomItem idTab= {3} priceType={priceType} />
        </>
    )
}

export default ListRooms