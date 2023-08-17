const initialState = {
    rooms:[],
    message:""
};

const SearchReducer = (state = initialState, action) => {
 switch (action.type) {
     case 'SEARCH': 
   
         return {
             ...state,                         
             rooms: action.payload.data,
             message: action.payload.message
         };
     case 'RESET':
         return{
             ...state,
             message: ""
         }

    
     default:
         return state;
 }
};

export default SearchReducer;