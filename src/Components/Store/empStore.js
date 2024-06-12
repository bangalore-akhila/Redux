
import {EmpReducer } from '../Reducers/empReducer';
import { fetchEmpDetails } from '../Actions/employeeAction';
import { bindActionCreators, applyMiddleware, createStore, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';


const rootReducer = combineReducers({ emp : EmpReducer});

const store = createStore(rootReducer, applyMiddleware(thunk));

export const actions = bindActionCreators({fetchEmpDetails},store.dispatch)

export default store;