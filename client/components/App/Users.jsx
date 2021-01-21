import React, { useEffect } from 'react';
import {connect,useDispatch,useSelector} from 'react-redux';
import {getUserlistRequest} from '../../redux'

const Users = (props) => {
    const data=useSelector(state=>state.userReducer.data);
    const numberof=useSelector(state=>state.userReducer.numberof); 
const dispatch=useDispatch();
    return (
        <div>
            {/* use this with connect and maostate and dispatch 
            <p><button className="btn btn-primary btn-lg" onClick={props.getUserlistRequest} >دریافت لیست</button></p> */}
            
            <p><button className="btn btn-primary btn-lg" onClick={()=>dispatch(getUserlistRequest())} >دریافت لیست</button></p>
            <h2>مثالی برای گرفتن state از ریداکس </h2>
            {/* use this with connect and maostate and dispatch 
            {
              props.numberof.map(data=>{return( <li> {data}</li> )})
            }
            <h1> number is : {props.numberof}</h1>
             */}


            {
              data.map(data=>{return( <li> {data}</li> )})
            }
            <h1> number is : {numberof}</h1>
             
            
        </div>
    );

     
};

//  const mapStateToProps=state=>{
//      return {
//         numberof:state.userReducer.data
//      }
//  }
//  const mapDispatchToProps=dispatch=>{
//     return{
//       getUserlistRequest:()=>dispatch(getUserlistRequest())
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Users);
export default Users;