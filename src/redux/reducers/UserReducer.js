// userReducer.js
const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_INFO':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
    
  };
  
  
  export default userReducer;
  