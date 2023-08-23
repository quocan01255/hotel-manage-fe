const initialState = {
  message: ""
};

const PayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PAY":

      return {
        ...state,
        message: action.payload.message
      };

    default:
      return state;
  }
};

export default PayReducer;
