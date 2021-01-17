import React from 'react';
import propTypes from 'prop-types';
import {useParams} from 'react-router-dom';
const ArticleDt=({params})=>{
   const { id } = useParams();
return <div className="content">
    <h2>You are on Article detail article is  {id}</h2>
</div>;

};


export default ArticleDt;