import { combineReducers } from 'redux';
import reducer from './test/reducers/reducers';
import userReducer from './users/userReducer';

const rootreducer = combineReducers ({
    reducer,
    userReducer,
    //other reducers user or market
});
export default rootreducer;