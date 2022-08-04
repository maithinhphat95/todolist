import React from "react";
import PropTypes from "prop-types";
import SideBarItem from "../../components/SideBarItem/SideBarItem";
import "./sideBar.css";
import { Link } from "react-router-dom";
SideBar.propTypes = {};

function SideBar(props) {
  return (
    <div className="sidebar-container">
      <Link to="/todolist/">
        <SideBarItem buttonText="All Task" />
      </Link>
      <Link to="/todolist/new">
        <SideBarItem buttonText="New Task" />
      </Link>
      <Link to="/todolist/doing">
        <SideBarItem buttonText="Doing Task" />
      </Link>
      <Link to="/todolist/done">
        <SideBarItem buttonText="Done Task" />
      </Link>
    </div>
  );
}

export default SideBar;
