// import { object } from 'prop-types';
import { SH_MSG, DIS_MSG, ALERT_MSG } from '../constants/action_types';
// import { showMsg,disMsg } from '../actions/actions';
const initialState={
    isdisplay:false,
    message:'',
    data:[],
    show_Msg:''
}
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case SH_MSG:
            return  {
                ...state,
                show_Msg: true,
                isdisplay: 'none',
                msg: action.msg,
            };
        case DIS_MSG:
            return {
                ...state,
                disMsg: false,
                msg: "dddddddd",
            };
        case ALERT_MSG:
            return {
                dispaly: true,
                msg: action.msg,
            };
        default:
            return state;
    }
};