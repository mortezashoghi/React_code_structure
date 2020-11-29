import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import reducers from './reducers';

let currentStore = null;
const middlewares = []; 

middlewares.push(createLogger());
export const configureStore=(initialState = {}) => {
    currentStore = createStore(
        reducers,
        initialState,
        applyMiddleware(...middlewares)

    ); 
    return currentStore;

};

export const getStore = () => currentStore;

// function counter(state = 0, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }
// //reducer
// const store = createStore(counter);

// store.subscribe(() => console.log(store.getState()));
// store.dispatch({
//     type: 'INCREMENT'
// });
// store.dispatch({
//     type: 'INCREMENT'
// });
// store.dispatch({
//     type: 'DECREMENT'
// });