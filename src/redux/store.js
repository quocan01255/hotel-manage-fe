import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootred from './reducers/main';

const store = createStore(rootred, applyMiddleware(thunk));

export default store;