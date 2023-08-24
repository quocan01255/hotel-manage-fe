const initialState = {
    isUpdSuccess: false,
    isDeleteSuccess: false,
};

const bookingManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REMOVE":
            return {
                ...state,
                message: action.payload.message,
                isDeleteSuccess: true,
            };
        case "UPDATE":
            return {
                ...state,
                message: action.payload.message,
                isUpdSuccess: true,
            };
        case "RESET":
            return {
                ...state,
                message: ""
            };
        case "RESET_UPD":
            return {
                ...state,
                isUpdSuccess: false
            };
        case "RESET_DELETE":
            return {
                ...state,
                isDeleteSuccess: false
            };
        default:
            return state;
    }
};

export default bookingManagerReducer; 