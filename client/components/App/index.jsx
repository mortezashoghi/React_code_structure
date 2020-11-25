import React from 'react';
import Message from './message';
import Footer from './Footer';
import moment from 'moment';
import propTypes from 'prop-types';
const App=({initialAt})=>{
  return  <div> <h3> morteza shoghi <Message/> footer is <Footer isFromNow value={initialAt} /></h3> </div>
};
App.propTypes={
  initialAt:propTypes.string,
};
App.defaultProps={
  initialAt:moment('20130301','YYYYMMDD').toISOString(),
};
export default App;
