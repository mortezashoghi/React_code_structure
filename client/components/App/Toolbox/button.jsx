import React from 'react';
import propTypes from 'prop-types';

const Button=({prs})=>{

    
    const lable=prs.lable;
    const onclickAct=prs.onclickAct;
    const classname=prs.classname;
    
    return <button onClick={onclickAct} className={classname} >{lable}</button>;

};

Button.propTypes={
    lable:propTypes.string.isRequired,
    onclickAct:propTypes.string.isRequired,
    classname:propTypes.string.isRequired,
};

Button.defaultProps={
    classname:'link btn',
    lable:'Submit',
};


export default Button;