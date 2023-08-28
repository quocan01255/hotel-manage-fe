import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
function Detail() {

    const [bookings, setBookings] = useState([]);   
    const { id } = useParams();
    useEffect(() => {
        fetch("http://localhost:3001/bookings")
            .then((response) => response.json())
            .then((booking) => {
                const phong = booking.filter((item) => item.id == id)

                setBookings(phong);
            })
        console.log("guestCart", bookings);
    }, [bookings,id])

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>          

            <div className=" mb-5 "style={{ width:"850px" }}>
                <div className="c-room-card " >
                    {bookings.map((room) => (
                        <div key={room.id}>
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <div className="c-form-details">
                                        <div className="c-form-title"><i class="fa-solid fa-user"></i>{room.fistname}</div>
                                        <div className="c-form-title"><i class="fa-solid fa-envelope"></i>{room.email}</div>
                                        <div className="c-form-title"><i class="fa-solid fa-phone"></i>{room.phone}</div>
                                        <div className="c-form-title"><i class="fa-solid fa-location-dot"></i> {room.address}</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="c-room-rating">
                                        NameRoom: {room.nameroom}
                                    </div>
                                    <div className="c-room-price"> Total Price : 
                                        {new Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(room.totalRoomPrice)}

                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                    <br />

                </div>
            </div>

        </div>

    );
}

export default Detail
