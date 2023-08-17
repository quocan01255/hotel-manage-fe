// import { createStore, applyMiddleware, combineReducers,  } from 'redux';
// import thunk from 'redux-thunk'
// import authReducer from './reducers/authReducer'
// import cartReducer from './reducers/cartReducer';


// const rootReducer = combineReducers({authReducer, cartReducer})
// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;




import { createStore, applyMiddleware  } from 'redux';
import rootred from "./reducers/main"
import thunk from 'redux-thunk'

import authReducer from './reducers/authReducer'
import cartReducer from './reducers/cartReducer';
import SearchReducer from './reducers/SearchReducer';
const rootReducer = combineReducers({authReducer, cartReducer,SearchReducer})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;