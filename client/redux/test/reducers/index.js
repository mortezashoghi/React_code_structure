import { combineReducers } from 'redux';
import reducer from './reducers';
const mainreducer = combineReducers ({
    reducer,
    //other reducers user or market
});
export default mainreducer;