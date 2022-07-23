import React from "react";
import PropTypes from "prop-types";
import "./panigation.css";
Panigation.propTypes = {};

function Panigation(props) {
  return (
    <div className="panigation">
      <div className="panigation-item">
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div className="panigation-item">1</div>
      <div className="panigation-item">2</div>
      <div className="panigation-item">3</div>
      <div className="panigation-item">
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
}

export default Panigation;
