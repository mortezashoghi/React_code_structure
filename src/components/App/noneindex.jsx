import React from 'react';
import Message from './message';
import Footer from './Footer';
import moment from 'moment';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { render } from 'react-dom';


const App=({initialAt},props)=>{

  return  (<div>
    <div className="footer container clear-top">

    {/* <span>  first sample <Footer isFromNow value={initialAt} btnval="send"/></span> */}
    </div>
   
          </div>);


  };
 App.propTypes={
   initialAt:propTypes.string
  //  children:propTypes.oneOfType([
  //    propTypes.arrayOf(propTypes.node),
  //    propTypes.node,]),
  
};
 App.defaultProps={
   initialAt:moment('20130301','YYYYMMDD').toISOString(),
 };
export default App;
