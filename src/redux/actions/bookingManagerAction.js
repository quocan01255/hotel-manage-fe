export const remove = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/bookings/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => {
                dispatch({
                    type: 'REMOVE',
                    payload: {
                        message: "Remove booking success!"
                    },
                });
            })
            .catch((error) => {
            });
    };
};

export const upd = (data, id) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/bookings`)
            .then((response) => response.json())
            .then((bookings) => {
                const findBooking = bookings.find(booking => booking.id === id)
                fetch(`http://localhost:3001/bookings/${findBooking.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "name": data.name,
                        "email": data.email,
                        "phone": data.phone,
                        "idroom": data.idroom,
                        "checkin": data.checkin,
                        "checkout": data.checkout,
                    })
                })
                    .then(res => res.json())
                    .then(() => {
                        dispatch({
                            type: 'UPDATE',
                            payload: {
                                message: "Update booking success!"
                            },
                        });
                    })
                    .catch((err) => {
                    });
            })
            .catch((err) => {
            });
    }
}
export const rsMessage = () => {
    return (dispatch) => {
        dispatch({
            type: 'RESET'
        });
    }
}