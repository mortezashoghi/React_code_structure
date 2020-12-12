import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
  } from "react-router-dom";
// import App from './components/App/index';
import Home from './containers/Home';
import Article from './containers/Article';
import NotExist from './containers/NotExist';
import ArticleDt from './containers/ArticleDt';
const routes=()=>{
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route exact path="/Article" component={Article} />
            <Route exact path="/Article/:id" component={ArticleDt}/>  
            <Route component={NotExist} />
        </Switch>);
};

export default routes;