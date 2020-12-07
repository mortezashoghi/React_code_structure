import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

let currentStore = null;
const middlewares = [];

middlewares.push(createLogger());
export const configureStore = (initialState = {}) => {
    currentStore = createStore(
        reducers,
        initialState,
        applyMiddleware(...middlewares)

    );
    return currentStore;

};

export const getStore = () => currentStore;