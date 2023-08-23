export const Search = (data) => {
    const { startDate, endDate, quantity } = data

    // Trả về một action có type và payload tương ứng
    return (dispatch) => {
        fetch('http://localhost:3001/rooms')
            .then((response) => response.json())
            .then((searchs) => {
                const data = searchs.filter((item) => item.quantity >= quantity && (item.checkin <= startDate && item.checkout >= startDate) && (item.checkin <= endDate && item.checkout >= endDate));

                if (data.length) {
                    dispatch({
                        type: 'SEARCH',
                        payload: {
                            data,
                            message: "Còn phòng "
                        }

                    });
                }
                else {
                    dispatch({
                        type: 'SEARCH',
                        payload: {
                            data,
                            message: "Hết phòng rồi "
                        },
                    });



                }
            })
            .catch((error) => {

            });
    }
};

export const resetmessage = () => {
    return (dispatch) => {
        dispatch({
            type: 'RESET',
        });
    }
}