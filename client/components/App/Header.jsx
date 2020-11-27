import React from 'react';
import {Link,useRouteMatch} from 'react-router-dom';
import Message from './message';
import Footer from './Footer';
import moment from 'moment';
import propTypes from 'prop-types';
import Showmessage from './showMsg';

const Header=({initialAt},props)=>{
  let { path, url } = useRouteMatch();
  return <div> <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/Home"><span className="sr-only">(current)</span>Home</Link>

      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>

      </li>
      <li className="nav-item">
        <Link className="nav-link"  to="/Article">Article </Link>

      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
<div> 


  {/* {props.children} */}
   <span>first sample <Footer isFromNow value={initialAt}  btnval="send"/></span></div>

</div>
};
Header.propTypes={
  initialAt:propTypes.string
  // children:propTypes.oneOfType([
  //   propTypes.arrayOf(propTypes.node),
  //   propTypes.node,]),
 
};
Header.defaultProps={
  initialAt:moment('20130301','YYYYMMDD').toISOString(),
};
export default Header;