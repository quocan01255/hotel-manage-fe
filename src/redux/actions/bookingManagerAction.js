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
                        message: "Delete booking success!"
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
                        ...findBooking,
                        "lastname": data.lastname,
                        "email": data.email,
                        "phone": data.phone,
                        "nameroom": data.nameroom
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
export const rsIsUpdSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: 'RESET_UPD'
        });
    }
}

export const rsIsDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: 'RESET_DELETE'
        });
    }
}