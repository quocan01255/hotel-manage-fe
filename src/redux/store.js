import { createStore, applyMiddleware, combineReducers,  } from 'redux';
import thunk from 'redux-thunk'
import authReducer from './reducers/authReducer'
import cartReducer from './reducers/cartReducer';
import SearchReducer from './reducers/SearchReducer';
import userReducer from "./reducers/UserReducer";
import PayReducer from "./reducers/PayReducer";



const rootReducer = combineReducers({authReducer, cartReducer, SearchReducer, userReducer, PayReducer})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;