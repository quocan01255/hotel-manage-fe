
export const payment = (formData,cart,totalRoomPrice,user) => {
    const roomname = []
    return (dispatch) => {
        cart.forEach((item) => roomname.push(`${item.name}(${item.quantity})`))
        fetch('http://localhost:3001/bookings', {
            method: 'POST',
            body: JSON.stringify({               
                fistname: formData.firstName,
                lastname: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                city: formData.city,
                country: formData.country,
                rooms:cart,   
                nameroom: roomname.join(', '),            
               totalRoomPrice:totalRoomPrice,
               idUser:user,
              


               
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(() => {
                dispatch({
                    type: 'PAY',
                    payload: {
                        message: "Pay room success!"
                    },
                });
            })
            .catch((err) => {
            });
    }
}
