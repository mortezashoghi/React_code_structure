import React from 'react';
import propTypes from 'prop-types';

const Button=({prs})=>{

    
    const lable=prs.lable;
    const onclickAct=prs.onclickAct;
    const classname=prs.classname;
    const nclk=()=>{
        console.log("kjlhjkhkjh");
    };
    return <button type="submit" onClick={onclickAct.bind()} className={classname} >{lable}</button>;

};

Button.propTypes={
    lable:propTypes.string.isRequired,
    onclickAct:propTypes.any,
    classname:propTypes.string.isRequired,
};

Button.defaultProps={
    classname:'link btn',
    lable:'Submit',
    onclickAct:"fetchdata",

};


export default Button;