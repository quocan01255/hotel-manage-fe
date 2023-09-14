export const payment = (formData, cart, totalRoomPrice, user,visitorinfo) => {
    const roomname = []
    return (dispatch) => {
        cart.forEach((item) => roomname.push(`${item.name} - (${item.quantity}) - (${item.checkin} - ${item.checkout})`))
        fetch('http://localhost:3001/bookings', {
            method: 'POST',
            body: JSON.stringify({
                firstname: formData.firstName,
                lastname: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                city: formData.city,
                rooms: cart,
                country: formData.country,
                nameroom: roomname.join(', '),
                totalRoomPrice: totalRoomPrice,
                idUser: user,
                visitorinfo
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
