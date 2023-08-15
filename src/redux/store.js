import { createStore, applyMiddleware, combineReducers,  } from 'redux';
import thunk from 'redux-thunk'
import authReducer from './reducers/authReducer'
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({authReducer, cartReducer})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;