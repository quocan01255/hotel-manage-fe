export const add = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3001/rooms', {
            method: 'POST',
            body: JSON.stringify({
                "type": data.type,
                "name": data.name,
                "quantity": data.quantity,
                "detail": data.detail,
                "description": [data.description],
                "img": data.img,
                "price": data.price,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: 'ADD',
                    payload: {
                        message: "Add room success!"
                    },
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

export const remove = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/rooms/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => {
                dispatch({
                    type: 'REMOVE',
                    payload: {
                        message: "Remove room success!"
                    },
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

export const upd = (data, id) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/rooms`)
            .then((response) => response.json())
            .then((rooms) => {
                const findRoom = rooms.find(room => room.id === id)
                fetch(`http://localhost:3001/rooms/${findRoom.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "type": data.type,
                        "name": data.name,
                        "quantity": data.quantity,
                        "detail": data.detail,
                        "description": [data.description],
                        "img": data.img,
                        "price": data.price,
                    })
                })
                    .then(res => res.json())
                    .then(() => {
                        dispatch({
                            type: 'UPDATE',
                            payload: {
                                message: "Update room success!"
                            },
                        });
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            })
            .catch((err) => {
                console.error(err);
            });
    }
}