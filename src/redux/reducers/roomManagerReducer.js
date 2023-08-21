const initialState = {
    roomManager: [],
};

const roomManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,

            };
        case "REMOVE":
            return {
                ...state,

            };
        case "UPDATE":
            return {
                ...state,

            };
        default:
            return state;
    }
};

export default roomManagerReducer;