import {GET_ULIST_SUCCESS,GET_ULIST_REQUEST,GET_ULIST_ERROR,GET_UONE} from './actionTypes';

export const getUserlistRequest = (numberof) => {
    return { 
        type: GET_ULIST_REQUEST,
        payload:numberof
           }

        }
 export const getUserlistData = users => {
        return { 
            type: GET_ULIST_SUCCESS,
            payload:users
            }
        
        }
  export const getUserlistError = error => {
          return { 
              type: GET_ULIST_ERROR,
              payload: error
           }
                
      }
