const initialState = {
    bookingManager: [],
    };
    
    const bookingManagerReducer = (state = initialState, action) => {
    switch (action.type) {
    case "REMOVE":
    return {
    ...state,
    
    Copy
            };
        default:
            return state;
    }
    };
    
    export default bookingManagerReducer; 