import React from 'react';
import Header from '../components/App/Header';
import Sidebar from './sidebar';
import Footer from '../components/App/Footer';
import moment from 'moment';
import propTypes from 'prop-types';
// import '../components/App/font-awesome.min.css'
// import faStyles from '../components/App/font-awesome.min.css'


const Home=({ initialAt })=>{

    return <div>
        <Header/>
        {/* <Outlet /> */}
        <Sidebar/>
        
        {/* <Footer isFromNow="false" value={initialAt} btnval="send" /> */}

</div>;

};
Home.propTypes = {
     initialAt: propTypes.string
    
  
  };
  Home.defaultProps = {
     initialAt: moment('20130301', 'YYYYMMDD').toISOString(),
  };
export default Home;