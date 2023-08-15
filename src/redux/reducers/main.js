import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./UserReducer";

const rootred=combineReducers({
    authReducer,
    userReducer
})

export default rootred