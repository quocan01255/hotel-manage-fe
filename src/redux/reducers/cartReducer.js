const initialState = {
    message: "",
    type: "",
    quantity: 0,
    guestCart: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                type: action.type,
                message: action.payload.message,
            };
        case 'UPDATE':
            return {
                ...state,
                type: action.type,
                message: action.payload.message,
            };
        case 'RESET':
            return {
                ...state,
                type: action.type,
                message: ""
            }
        case 'REMOVE':
            return {
                ...state,
                type: action.type,
                message: action.payload.message,
            }
        case 'INCREASE':
            return {
                ...state,
                type: action.type,
                message: action.payload.message,
                quantity: action.payload.quantity
            }
        case 'DECREASE':
            return {
                ...state,
                type: action.type,
                message: action.payload.message,
                quantity: action.payload.quantity
            }
        case 'RESETCART':
            return {
                ...state,
                type: action.type,
                message: "",
                cartLength: 0,
            }
        default:
            return state;
    }
};

export default cartReducer;
