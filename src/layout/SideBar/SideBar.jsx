import React from "react";
import PropTypes from "prop-types";
import SideBarItem from "../../components/SideBarItem/SideBarItem";
import "./sideBar.css";
SideBar.propTypes = {};

function SideBar(props) {
  return (
    <div className="sidebar-container">
      <SideBarItem buttonText="All Task" />
      <SideBarItem buttonText="New Task" />
      <SideBarItem buttonText="Doing Task" />
      <SideBarItem buttonText="Done Task" />
    </div>
  );
}

export default SideBar;
