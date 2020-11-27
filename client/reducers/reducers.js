// import { object } from 'prop-types';
import { SH_MSG, DIS_MSG } from '../constants/action_types';

export default function reducer(state = {}, action) {

    switch (action.type) {
        case SH_MSG:
            return Object.assign({}, state, {
                showMsg: true,
                msg: action.msg,
            });
        case DIS_MSG:
            return Object.assign({}, state, {
                disMsg: false,
                msg: "dddddddd",
            });
        default:
            return state;
    }
};