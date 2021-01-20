import { data } from 'jquery';
import React from 'react';
import {connect} from 'react-redux';
const Users = (props) => {
    return (
        <div>
            {props.data.length>1 ? props.data : props.error}
        </div>
    );

    
}
 const mapStateToProps=state=>{
     return {
         loading:state.loading,
         data:state.data,
         error:state.error
     }
 }

export default connect(mapStateToProps)(Users);