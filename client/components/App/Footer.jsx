import React from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import './style.css';
const Footer=({locale,value,isFromNow})=>{
    if(!value){
        return false;
    }
    moment.locale(locale);
    if(isFromNow){
        return <div className="alone"><span>react from {moment(value).fromNow()}</span></div>;
    }
    return <span>{moment(value)}</span>;
};


Footer.propTypes={
locale:propTypes.string.isRequired,
value:propTypes.string.isRequired,
isFromNow:propTypes.bool.isRequired,
};

Footer.defaultProps={
    locale:'en',
    isFromNow:false,
    };


export default Footer;