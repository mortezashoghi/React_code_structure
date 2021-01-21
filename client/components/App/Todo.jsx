import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../../redux'

const Todo = (props) => {
    return ( 
            <React.Fragment>
                    <li onClick={()=>props.toggleTodo(props.data.id)}>
                       {
                     props.data && props.data.complete ?  <span style={{color:'green',backgroundColor:'white'}}> تمام </span> 
                        : <span style={{color:'red',backgroundColor:'white'}}> درحال انجام  </span>
                        }
                        -- {props.data.content}
                        </li>

            </React.Fragment>
     );
}
 
const mapDispatchToProps=dispatch=>{
        return{
                toggleTodo:id=>dispatch(toggleTodo(id))
        }
}
export default connect(null,mapDispatchToProps)(Todo);