import { combineReducers } from 'redux';
import reducer from './test/reducers/reducers';
import userReducer from './users/userReducer';
import todoReducer from './todo/todoReducer';

const rootreducer = combineReducers ({
    reducer,
    userReducer,
    todoReducer,

    //other reducers user or market
});
export default rootreducer;