import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import App from './components/App/index';
import Home from './containers/Home';
import Article from './containers/Article';
import NotExist from './containers/NotExist';

const routes=()=>{

        return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/Home" component={Home} />
            <Route  path="/Article" component={Article} />
            <Route  component={NotExist} />
        </Switch>);
};

export default routes;