const initialState = {
    roomManager: [],
    message: ''
};

const roomManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                message: action.payload.message

            };
        case "REMOVE":
            return {
                ...state,
                // message: action.payload.message

            };
        case "UPDATE":
            return {
                ...state,
                message: action.payload.message

            };
        default:
            return state;
    }
};

export default roomManagerReducer;