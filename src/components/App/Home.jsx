import React from 'react';
import Header from './Header';
import Sidebar from './sidebar';
import Footer from './Footer';
import moment from 'moment';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import Content from './Content';
// import '../components/App/font-awesome.min.css'
// import faStyles from '../components/App/font-awesome.min.css'
import Users from './Users';

const Home=({ initialAt })=>{

   const [screensize,setScreensize]=useState('desktop');
   const [classNames,setclassNames]=useState({name:"ali",age:"20"});
//   useEffect(()=>{
//     window.addEventListener("resize", resize);
//  },[]);
 const resize=()=>{
    if (window.innerWidth <= 450) {
      setclassNames("navbar fixed-bottom navbar-expand navbar-light bg-light");
    }
 };

    return <div>
        <Header clas={classNames}/>
        {/* <Sidebar/> */}
         <Content/>
<Users/>
</div>;

};
Home.propTypes = {
     initialAt: propTypes.string
    
  
  };
  Home.defaultProps = {
     initialAt: moment('20130301', 'YYYYMMDD').toISOString(),
  };
export default Home;