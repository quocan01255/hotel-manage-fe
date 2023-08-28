export const removeuser = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/accounts/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => {
                dispatch({
                    type: 'REMOVE_USER',
                    payload: {
                        message: "Delete booking success!"
                    },
                });
            })
            .catch((error) => {
            });
    };
};
export const rsIsDelete = () => {
    return (dispatch) => {
        dispatch({
            type: 'RESET_DELETEUSER'
        });
    }
}