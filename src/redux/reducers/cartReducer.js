const initialState = {
    message: '',
    guestCart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                message: action.payload.message,
                guestCart: action.payload.guestCart
            };
        case 'UPDATE': 
            return {
                ...state,
                message: action.payload.message,
                guestCart: action.payload.guestCart
            }
        default:
            return state;
    }
};

export default cartReducer;