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
                // Xử lý lỗi nếu cần thiết
                console.error(error);
            });
    };
};