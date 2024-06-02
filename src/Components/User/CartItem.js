import React, { useCallback, useEffect, useState } from "react";
import { getRoomById } from "../../services/api";

const CartItem = ({
    roomId,
    handleRemove,
    increaseTotal,
    decreaseTotal
}) => {
    const [info, setInfo] = useState({});

    const getInfo = async () => {
        const response = await getRoomById(roomId);
        // console.log(response)
        setInfo(response[0])
    }

    useEffect(() => {
        getInfo();
    }, [roomId])

    useEffect(() => {
        if (info.price && !isNaN(parseFloat(info.price))) {
            const price = parseFloat(info.price);
            // console.log(parseFloat(info.price))
            increaseTotal(price);
        } else {
            console.error("Invalid price value");
        }
    }, [info.price])

    const handleDecreaseAndRemove = () => {
        handleRemove();
        if (info.price && !isNaN(parseFloat(info.price))) {
            const price = parseFloat(info.price);
            decreaseTotal(price);
        } else {
            console.error("Invalid price value");
        }
    };


    return (
        <div key={roomId}>
            <img className="c-room-image" src={info.img} alt="Hình ảnh phòng" />
            <div className="c-form-details">
                <div className="c-form-title">{info.name}</div>
                <div className="c-room-subtitle">{info.details}</div>
                <div className="c-room-price">
                    {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(info.price)}
                    <button
                        className="btn btn-primary room_tab-btn"
                        onClick={handleDecreaseAndRemove}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;