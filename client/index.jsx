import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import { Router} from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from './routes';
import  "jquery/dist/jquery.min.js";
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.js';
import {Provider} from 'react-redux';
import { configureStore } from './redux/store';

const history = createBrowserHistory();
const store=configureStore();

const render=()=>{

    // const {history} = useHistory();
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
               <Router history={history}>
                   <div className="container"> 
                        {/* <Home/>   */}
                           {routes()}
                        {/* <Footer/> */}
                    </div>
               </Router>
            </Provider>
       </AppContainer>,
       document.getElementById('app')
    );
};

render();
if(module.hot){
    module.hot.accept();
}



// render();
// if(module.hot){
//     module.hot.accept('./components/App/Home',()=>{
//         render();
//     });
// }



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