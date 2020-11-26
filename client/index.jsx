import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './components/App';
import Header from './components/App/Header';
import Message from './components/App';
import history from 'history'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link  } from "react-router-dom";
import routes from './routes';
import  "jquery/dist/jquery.min.js";
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.js';

// After add router

const render=()=>{
    ReactDOM.render(
        <AppContainer>
        <Router history={history}>
        <Header/>
        <div className="container-fluid">
              {routes()}

</div>

            <App/>
       </Router>
      
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