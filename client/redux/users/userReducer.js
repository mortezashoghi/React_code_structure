import { fetchData } from '../test/actions';
import {GET_ULIST_SUCCESS,GET_ULIST_REQUEST,GET_ULIST_ERROR,GET_UONE} from './actionTypes';

initialStates={
    loading:false,
    data:[],
    error:''
}

const userReducer=(state=initialStates,action)=>{
switch(action.type){
    case GET_ULIST_REQUEST: return{
        ...state,
        loading:true
    }
    case GET_ULIST_SUCCESS : return{
        ...state,
        data:fetchData()
    }
    case GET_ULIST_ERROR:return{
        ...state,
        error:fetchData()
    }

} 
}
export default userReducer; 