import React from "react";
import PropTypes from "prop-types";
import TaskList from "../TaskList/TaskList";
import Panigation from "../Panigation/Panigation";
import "./mainContent.css";
MainContent.propTypes = {};

function MainContent(props) {
  return (
    <div className="main-content">
      <TaskList />
      <Panigation />
    </div>
  );
}

export default MainContent;
