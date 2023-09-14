import React from 'react'

function Detail(props) {
    const { bookings } = props
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>

            <div className=" mb-5 " style={{ width: "850px" }}>
                <div className="c-room-card " >
                    {bookings.map((room) => (
                        <div key={room.id}>
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <div className="c-form-details">
                                        <div className="c-form-title"><i style={{ width: '25px' }} class="fa-solid fa-user"></i>{room.firstname}</div>
                                        <div className="c-form-title"><i style={{ width: '25px' }} class="fa-solid fa-envelope"></i>{room.email}</div>
                                        <div className="c-form-title"><i style={{ width: '25px' }} class="fa-solid fa-phone"></i>{room.phone}</div>
                                        <div className="c-form-title"><i style={{ width: '20px' }} class="fa-solid fa-location-dot"></i> {room.address}</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="c-room-rating">
                                        Information: {room.nameroom}
                                    </div>
                                    <div className="c-room-price"> Total Price:
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
