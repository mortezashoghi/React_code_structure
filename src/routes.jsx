import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
// import App from './components/App/index';
import Home from "./components/App/Home";
import Article from "./components/App/Article";
import NotExist from "./components/App/NotExist";
import ArticleDt from "./components/App/ArticleDt";
import Addtodo from "./components/App/Addtodo";
import SignIn from "./components/App/signin";
const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/Home" component={Home} /> */}
      <Route exact path="/Article" component={Article} />
      <Route exact path="/Article/:id" component={ArticleDt} />
      <Route exact path="/todo" component={Addtodo} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/index.html" component={Home} />
      <Route component={NotExist} />
    </Switch>
  );
};

export default routes;
