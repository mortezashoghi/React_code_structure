import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, Outlet } from "react-router-dom";
import Showmessage from "./showMsg";
import propTypes from "prop-types";
import "./style.css";
import { data } from "jquery";
import axios from "axios";
// import './font-awesome.min.css';

const Header = ({ props, clas }) => {
  let { path, url } = useRouteMatch();
  const [lst, setLst] = useState(null);
  let lstlist = null;
  const jsontest = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setLst(response.data);
  };
  return (
    <div>
      {" "}
      <nav
        className={
          window.innerWidth >= 450
            ? "navbar navbar-expand-lg navbar-light bg-light"
            : "navbar fixed-bottom navbar-expand navbar-light bg-light"
        }
      >
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <span className="sr-only">(current)</span>صفحه نخست
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Article">
                مطالب{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                لیست کارها
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                درباره
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                ورود به سیستم
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown link
        </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li> */}
          </ul>
          {/* <button className="btn btn-danger" onClick={jsontest}  >click to get</button> */}
          {lst &&
            lst.map((lst, index) => {
              return <li key={index}>{lst.title}</li>;
            })}
          <div></div>
        </div>
      </nav>
      <div>
        {/* <span> first sample: <Footer isFromNow value={initialAt} btnval="send" /></span> */}
      </div>
    </div>
  );
};
Header.propTypes = {
  // initialAt: propTypes.string
  // children:propTypes.oneOfType([
  //   propTypes.arrayOf(propTypes.node),
  //   propTypes.node,]),
  // clas:propTypes.string,
};
Header.defaultProps = {
  clas: "navbar navbar-expand-lg navbar-light bg-light",
  // initialAt: moment('20130301', 'YYYYMMDD').toISOString(),
};
export default Header;
