const initialState = {
    name: [],
    message: ""
};

const SearchAdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_ADMIN':
            return {
                ...state,
                name: action.payload.data,
                message: action.payload.message
            };
        case 'RESET_ADMIN':
            return {
                ...state,
                message: ""
            }
        default:
            return state;
    }
};

export default SearchAdminReducer;