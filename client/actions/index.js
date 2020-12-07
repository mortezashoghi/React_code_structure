import { SH_MSG, DIS_MSG } from '../constants/action_types';
export const showMsg = (msg = '') => {
    return {
        type: SH_MSG,
        msg: msg
    }
};
export const disMsg = (msg = '') => {
    return {
        type: DIS_MSG,
        msg: ''
    }
};