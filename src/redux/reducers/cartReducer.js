const initialState = {
    message: "",
    type: "",
    guestCart: [],
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
                message: action.payload.message,
                guestCart: action.payload.guestCart
            };
        case 'RESET':
            return {
                ...state,
                message: ""
            }
        case 'REMOVE':
            return {
                ...state,
                type: action.type,
                message: action.payload.message,
                guestCart: action.payload.guestCart
            }
        case 'RESET':
            return {
                ...state,
                message: ""
            }
        default:
            return state;
    }
};

export default cartReducer;

// const initialState = {
//     message: '',
//     cart: [], // Replace with your actual cart state
//   };

//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_GUEST_CART':
//         const findProductIndex = state.cart.findIndex(item => item.idRoom === action.payload.idRoom);
//         if (findProductIndex < 0) {
//           const updatedGuestCart = [...state.cart, { idRoom: action.payload.idRoom, quantity: 1 }];
//           return {
//             ...state,
//             message: 'Add room to guest cart success!',
//             cart: updatedGuestCart,
//           };
//         } else {
//           const updatedGuestCart = [...state.cart];
//           updatedGuestCart[findProductIndex].quantity += 1;
//           return {
//             ...state,
//             message: 'Update guest cart success!',
//             cart: updatedGuestCart,
//           };
//         }

//       // Other cases...
//       case 'ADD':
//         return {
//             ...state,
//             message: action.payload.message,
//             guestCart: action.payload.guestCart
//         };
//     case 'UPDATE':
//         return {
//             ...state,
//             message: action.payload.message,
//             guestCart: action.payload.guestCart
//         }

//       default:
//         return state;
//     }
//   };

//   export default cartReducer;
