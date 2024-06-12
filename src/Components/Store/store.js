import {createStore, bindActionCreators, combineReducers} from 'redux';
import CakeReducer from '../Reducers/cakeReducer';
import UserReducer from '../Reducers/userReducer';
import { cakeOrdered, cakeSelled } from '../Actions/cakeActions';
import { fetchUser } from '../Actions/userAction';
import { applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';


const rootReducer = combineReducers({cake : CakeReducer, user : UserReducer});

const store = createStore(rootReducer,applyMiddleware(thunk));

export const actions = bindActionCreators({cakeOrdered, cakeSelled, fetchUser}, store.dispatch);

export default store;