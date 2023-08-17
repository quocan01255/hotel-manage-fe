const initialState = {
  carts: [],
};

const PayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      const temp = { ...action.payload, quantity: 1 };
      return {
        ...state,
        carts: [...state.carts, action.payload],
        carts: [...state.carts, temp],
      };

    default:
      return state;
  }
};

export default PayReducer;
