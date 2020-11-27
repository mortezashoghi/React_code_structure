import React from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import './style.css';
// import showmessage from './showMsg';
import { getStore } from '../../store';
import { connect } from 'react-redux';
import Showmessage from './showMsg';


const Footer=({locale,value,isFromNow,btnval,dispatch})=>{
    if(!value){
        return false;
    }
    moment.locale(locale);
    function  hclick() {
        const store=getStore();
        store.dispatch({type:'SH_MSG',msg:'i am redux'});
      }
    if(isFromNow){
        return (<div className="alone"><span>react from {moment(value).fromNow()}</span>
        <button onClick={hclick} className="btn btn-warning"> {btnval}</button></div>);
    }
          
    return (<div>
    <hr></hr>
    <button onClick={handleClick} className="btn btn-link kkkk"> {btnval}</button>
        <span>{moment(value)}</span>
    </div>);
};


Footer.propTypes={
locale:propTypes.string.isRequired,
value:propTypes.string.isRequired,
isFromNow:propTypes.bool.isRequired,
btnval:propTypes.string.isRequired,
dispatch:propTypes.func,
};

Footer.defaultProps={
    locale:'en',
    isFromNow:false,
    };


export default (connect)(Footer);