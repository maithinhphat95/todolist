import React from "react";
import PropTypes from "prop-types";
import "./sideBarItem.css";
SideBarItem.propTypes = {};

function SideBarItem(props) {
  const { buttonText } = props;
  return <div className="sidebar-item">{buttonText}</div>;
}

export default SideBarItem;
