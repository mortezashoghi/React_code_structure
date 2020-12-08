import React from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import './style.css';
// import showmessage from './showMsg';
import { getStore } from '../../store';
import { connect } from 'react-redux';
import Showmessage from './showMsg';
import {showMsg,disMsg} from '../../actions/';
import  Button from './Toolbox/button';


const Footer=({locale,value,isFromNow,btnval,isdisplay})=>{
   
    const prp={
        lable:"submit",
        onclickAct:"fetchdata",
        classname:"alert link btn btn-primary"
       };// import showmessage from './showMsg';

       const prp2={
        lable:"Send form",
        // onclickAct:"fetchdata",
        classname:"alert link btn btn-danger"
       };
    if(!value){
        return false;
    }

    moment.locale(locale); 
    function  hclick() {
        const store=getStore();
         store.dispatch(showMsg("check action call"));
      }

      const fetchdata=()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
      };
    if(isFromNow){
        return (<div className="alone">
           <div className="row">
           <Button prs={prp} />
           <Button prs={prp2} />
               </div> 
            <span>react from {moment(value).fromNow()}</span>
            

        <button onClick={hclick} className="btn btn-warning"> {btnval}</button>
        <button style={{display:isdisplay}} className="btn btn-warning"> {btnval}</button>
        </div>);
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
isdisplay:propTypes.string.isRequired,
};

Footer.defaultProps={
    locale:'en',
    isFromNow:false,
    isdisplay:'block',
    };


export default connect(state=>({isdisplay:state.reducer.isdisplay}))(Footer);