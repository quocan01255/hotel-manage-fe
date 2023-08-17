import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./UserReducer";
import PayReducer from "./PayReducer";
import cartReducer from "./cartReducer";

const rootred=combineReducers({
    authReducer,
    cartReducer,
    userReducer,
    PayReducer,
})

export default rootred