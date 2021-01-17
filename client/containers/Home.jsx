import React from 'react';
import Header from '../components/App/Header';
import Sidebar from './sidebar';
import Footer from '../components/App/Footer';
import moment from 'moment';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
// import '../components/App/font-awesome.min.css'
// import faStyles from '../components/App/font-awesome.min.css'


const Home=({ initialAt })=>{

   const [screensize,setScreensize]=useState('desktop');
//    const [classNames,setclassNames]=useState("navbar navbar-expand-lg navbar-light bg-light");
//   useEffect(()=>{
//     window.addEventListener("resize", resize);
//  },[]);
//  const resize=()=>{
//     if (window.innerWidth <= 450) {
//       setclassNames("navbar fixed-bottom navbar-expand navbar-light bg-light");
//     }
//  };
//  resize();

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