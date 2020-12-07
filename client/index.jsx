import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
// import App from './components/App';
import Header from './components/App/Header';
import history from 'history'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch  } from "react-router-dom";
import routes from './routes';
import  "jquery/dist/jquery.min.js";
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.js';
import {Provider} from 'react-redux';
import { configureStore } from './store.js';
import Showmessage from './components/App/showMsg';

// After add router

const store=configureStore();
const render=()=>{
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Router history={history}>
                    <Header/>
                    <div className="container-fluid">
                        {routes()}
                    </div>
               </Router>
            </Provider>
       </AppContainer>,
       document.getElementById('app')
    );
};

render();
if(module.hot){
    module.hot.accept('./components/App',()=>{
        render();
    });
}




/*

const render=Component=>{
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('app')
    );
};

render(App);
if(module.hot){
    module.hot.accept('./components/App',()=>{
        render(App);
    });
}
*/