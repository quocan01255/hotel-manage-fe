export const search = (name) => {
  

    // Trả về một action có type và payload tương ứng
    return (dispatch) => {
        fetch('http://localhost:3001/bookings')
            .then((response) => response.json())
            .then((searchs) => {
                const data = searchs.filter((item) => item.fistname == name);
                // console.log(data);
                if (data.length) {
                    dispatch({
                        type: 'SEARCH_ADMIN',
                        payload: {
                            data,
                            message: "Tên khách hàng đã tìm thấy "
                        }

                    });
                }
                else {
                    dispatch({
                        type: 'SEARCH_ADMIN',
                        payload: {
                            data,
                            message: "Không tìm thấy "
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
            type: 'RESET_ADMIN',
        });
    }
}