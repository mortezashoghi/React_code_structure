import {TOGGLE_TODO,INSERT_TODO}  from './ActionTypes';

let initid=0;

export const insertTodo=(todo)=>{
return{
    type:INSERT_TODO,
    payload:{
        content:todo,
        id:++initid
    }
}
};

export const toggleTodo=(id)=>{
return{
    type:TOGGLE_TODO,
    payload:{
        id
    }
}
}