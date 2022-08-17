import React from "react";
import PropTypes from "prop-types";
import "./sideBarItem.scss";

SideBarItem.propTypes = {
  buttonText: PropTypes.string,
};

function SideBarItem(props) {
  const { buttonText } = props;
  return (
    <div className="sidebar-item">
      <button>{buttonText}</button>
    </div>
  );
}

export default SideBarItem;
