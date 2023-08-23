const initialState = {
    bookingManager: [],
};

const bookingManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REMOVE":
            return {
                ...state,
                message: action.payload.message
            };
        case "UPDATE":
            return {
                ...state,
                message: action.payload.message
            };
        case "RESET":
            return {
                ...state,
                message: ""
            };
        default:
            return state;
    }
};

export default bookingManagerReducer; 