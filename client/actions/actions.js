import { SH_MSG, DIS_MSG } from '../constants/action_types';
export const showMsg = (msg = '') => ({
    type: SH_MSG,
    msg,

});
export const disMsg = () => ({
    type: DIS_MSG,
});