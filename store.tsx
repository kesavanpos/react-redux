import * as redux from 'redux';
import userReducer from './reducer/userReducer';

const store = redux.createStore(userReducer);
export default store;
