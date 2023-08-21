const initialState = {
    message: '',
    type: '',
    guestCart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                type: action.type,
                message: action.payload.message,
                guestCart: action.payload.guestCart
            };
        case 'UPDATE': 
            return {
                ...state,
                type: action.type,
                message: action.payload.message,
                guestCart: action.payload.guestCart
            }
        case 'REMOVE': 
            return {
                ...state,
                type: action.type,
                message: action.payload.message
            }
        default:
            return state;
    }
};

export default cartReducer;