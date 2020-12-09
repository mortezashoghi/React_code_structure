import React from 'react';
import propTypes from 'prop-types';
import { getStore } from '../../../store';
import { connect } from 'react-redux';
import {showMsg,disMsg,alertMsg} from '../../../actions';
const Button=({prs})=>{

    
    const lable=prs.lable;
    const onclickAct=prs.onclickAct;
    const clsname=prs.clsname;
    function showalert(){
        const store=getStore();
        store.dispatch(alertMsg("hale shoma chetore"));
      // console.log("lsdflkdjsf");
   }

    const nclk=()=>{
        console.log("kjlhjkhkjh");
    };
    return <button onClick={showalert} type="submit"  className={clsname} >{lable}</button>;

};

Button.propTypes={
    lable:propTypes.string.isRequired,
    onclickAct:propTypes.any,
    clsname:propTypes.string.isRequired,
};

Button.defaultProps={
    clsname:'link btn',
    lable:'Submit',
    //onclickAct:"fetchdata",

};


export default Button;