const initialState = {
    message: '',
    isAddSuccess: false,
    isUpdSuccess: false,
    isDeleteSuccess: false,
};

const roomManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                message: action.payload.message,
                isAddSuccess: true
            };
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
        case "RESET_ADD":
            return {
                ...state,
                isAddSuccess: false
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

export default roomManagerReducer;