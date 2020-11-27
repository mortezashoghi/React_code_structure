import React from 'react';
import propTypes from 'prop-types';
import './style.css';
import  '../../store.js';
import {connect} from 'react-redux';
import {disMsg, showMsg} from '../../actions/actions'

const Showmessage=({dispatch,msg})=>{
    //console.log(msg);
    dispatch(showMsg());
};
Showmessage.propTypes={
    msg:propTypes.string,
    dispatch:propTypes.func,
};
Showmessage.defaultProps={
    msg:'empty'
};

export default connect(
    state=>({msg:state.reducer.msg}))(Showmessage);
