import React from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
// import showmessage from './showMsg';
import { getStore } from '../../store';
import { connect } from 'react-redux';
import Showmessage from './showMsg';
import { showMsg, disMsg, alertMsg } from '../../actions/';
import Button from './Toolbox/button';


// const Footer = ({ locale, value, isFromNow, btnval, isdisplay, alertmessage }) => {
    const Footer = () => {

    const prp = {
        lable: "submit",
        onclickAct: "showalert",
        clsname: "alert link btn btn-primary"
    };

    const prp2 = {
        lable: "Send form first Time ",
        onclickAct: "showalert",
        clsname: "alert link btn btn-danger"
    };
    // if (!value) {
    //     return false;
    // }

    // moment.locale(locale);
    // function hclick() {
    //     const store = getStore();
    //     store.dispatch(showMsg("check action call"));
    // }
    // async function fetchdata() {

    //     const dtas = [];
    //            fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())
    //         .then(json => dtas.push(...json.title))
    //         .then(data => console.log("the data is : " + data));//map(showfetched));
       

    // }
    // const showfetched = (data) => {
    //     return <div>
    //         <li>{data.title}</li>
    //     </div>;
    // };
    // if (isFromNow) {
    //     return (<div className="container alone">
    //         {/* <div className="row"> */}
    //             {/* <Button prs={prp} /> */}
    //             {/* <Button prs={prp2} /> */}
    //         {/* </div> */}
    //         <span>react from date:::: {moment(value).fromNow()}</span>
    //         {/* <div className="row"><span> {alertmessage} </span></div> */}
    //         {/* <button onClick={hclick} className="btn btn-warning"> {btnval}</button> */}
    //         {/* <button style={{ display: isdisplay }} className="btn btn-danger" onClick={fetchdata}> {btnval}</button> */}
    //     </div>);
    // }
    return (
    //<div>
    //     <hr></hr>
    //     <button onClick={handleClick} className="btn btn-link kkkk"> {btnval}</button>
    //     <span>{moment(value)}</span>
    // </div>
    <div className="container alone"></div>
    );
};
// Footer.propTypes = {
    // locale: propTypes.string.isRequired,
    // value: propTypes.string.isRequired,
    // isFromNow: propTypes.bool.isRequired,
    // btnval: propTypes.string.isRequired,
    // dispatch: propTypes.func,
    // isdisplay: propTypes.string.isRequired,
    // alertmessage: propTypes.string,
// };

// Footer.defaultProps = {
//     locale: 'en',
//     isFromNow: false,
//     isdisplay: 'block',
//     alertmessage: '',
// };
// export default connect(state => ({ isdisplay: state.reducer.isdisplay, alertmessage: state.reducer.msg }))(Footer);
export default Footer;