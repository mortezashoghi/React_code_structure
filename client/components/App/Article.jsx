import React from 'react';
import propTypes from 'prop-types';
import {Link,useRouteMatch,useParams,Route,Switch} from 'react-router-dom';
import ArticleDt from './ArticleDt';
import Header from './Header';

const Article=props=>{
    let { path, url } = useRouteMatch();
   let num=Math.floor((Math.random() * 10) + 1);
return (<div className="content">
            <Header />

    <h2>You are on Article page  </h2>
    <li> <Link className="nav-link" to={`${url}/`+num}>Read more </Link> </li>

        <h3>result is hear</h3>
<div>
</div>
    
        </div>);

};


export default Article;