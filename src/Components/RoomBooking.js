import React from 'react'

function RoomBooking(props) {
    const { bookings } = props
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>

            <div className=" mb-5 " style={{ width: "850px" }}>
                <div className="c-room-card " >
                    {bookings.map((booking) => (
                        <div key={booking.id}>                           
                            {booking.rooms.map((room) => (
                        <div >
                          <img className="c-room-image" src={room.img} alt="Hình ảnh phòng" />
                          <div className="c-form-details">
                            <div className="c-form-title">{room.name}</div>
                            <div className="c-room-subtitle">{room.detail}</div>
                            <div className="c-room-features">
                              <ul>
                                {room.description.map((item, index) => (
                                  <li key={index}>
                                    <i className="fa-solid fa-circle"></i>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="c-room-rating">
                              Quantity: {room.quantity}
                             
              
                            </div>
                            <div className="c-room-price">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(room.price * room.quantity)}                              
                            </div>
                          </div>
                        </div>
                      ))}
                        </div>
                    ))}
                    <br />

                </div>
            </div>

        </div>

    );
}

export default RoomBooking
