const initialState = {
    message: '',  
    isDeleteSuccess: false, 
};

const removeUserReducer = (state = initialState, action) => {
    switch (action.type) {      
        case "REMOVE_USER":
            return {
                ...state,
                message: action.payload.message, 
                isDeleteSuccess: true,             
            } 
            case "RESET_DELETEUSER":
                return {
                    ...state,
                    isDeleteSuccess: false
                };      
        default:
            return state;
    }
};

export default removeUserReducer;