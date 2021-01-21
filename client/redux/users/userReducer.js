import {GET_ULIST_SUCCESS,
    GET_ULIST_REQUEST,
    GET_ULIST_ERROR,GET_UONE} from './actionTypes';

const initialState={
    loading:false,
    data:["ali","akbar"],
    error:'',
    numberof:100
}

const userReducer=(state=initialState,action)=>{
switch(action.type){
    case GET_ULIST_REQUEST: return{
        ...state,
        loading:true,
        numberof:state.numberof - 1
    }
    case GET_ULIST_SUCCESS : return{
        ...state,
        data:[]
    }
    case GET_ULIST_ERROR:return{
        ...state,
        error:''
    }
    default :return state

} 
}
export default userReducer; 