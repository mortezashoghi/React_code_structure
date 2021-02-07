// import React from 'react';
import propTypes from 'prop-types';
import './style.css';
import  '../../redux/store';
import {connect} from 'react-redux';
import {disMsg, showMsg} from '../../redux/test/actions'

const Showmessage=({dispatch,msg})=>{
    // console.log(msg);
   
};
Showmessage.propTypes={
    msg:propTypes.string,
    dispatch:propTypes.func,
};
Showmessage.defaultProps={
    msg:'empty'
};

export default connect(
    state=>({msg:state.reducer.show_Msg}))(Showmessage);
