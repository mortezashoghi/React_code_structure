import { createStore, applyMiddleware } from 'redux';

import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import reducers from './rootreducer';

let currentStore = null;
const middlewares = [];
// remove initialstate and add it to reducer file
middlewares.push(createLogger());
export const configureStore = () => {
    currentStore = createStore(
        reducers,
        // initialState,
        applyMiddleware(thunk)

    );
    return currentStore;

};

export const getStore = () => currentStore;