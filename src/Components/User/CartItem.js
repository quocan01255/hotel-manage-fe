import React, { useCallback, useEffect, useState } from "react";
import { getRoomById } from "../../services/api";

const CartItem = ({
    roomId,
    handleRemove
}) => {
    const [info, setInfo] = useState({})

    const getInfo = async () => {
        const response = await getRoomById(roomId);
        console.log(response)
        setInfo(response[0])
    }

    useEffect(() => {
        getInfo();
    }, [roomId])

    return (
        // Logged in
        <div key={roomId}>
            {info.img ? (
                <img className="c-room-image" src={info.img} alt="Hình ảnh phòng" />
            ) : (
                <div>Loading...</div>
            )}
            <div className="c-form-details">
                <div className="c-form-title">{info.name}</div>
                <div className="c-room-subtitle">{info.details}</div>
                {/* <div className="c-room-features">
                    <ul>
                        {info.description && info.description.map((item, index) => (
                            <li key={index}>
                                <i className="fa-solid fa-circle"></i>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div> */}
                {/* <div className="c-room-rating">
                    Quantity: {info.quantity}
                    <button className="btn btn-primary room_tab-btn" onClick={() => handleDecrease(info.id, info.checkin)}>
                        <i className="fa-solid fa-minus"></i>
                    </button>
                    <button className="btn btn-primary room_tab-btn" style={{ marginLeft: '4px' }} onClick={() => handleIncrease(info.id, info.checkin)}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div> */}
                <div className="c-room-price">
                    {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(info.price * info.quantity)}
                    <button
                        className="btn btn-primary room_tab-btn"
                        onClick={handleRemove}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;