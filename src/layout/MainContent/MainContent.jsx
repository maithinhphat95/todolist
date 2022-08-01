import React from "react";
import PropTypes from "prop-types";
import TaskList from "../../components/TaskList/TaskList";
import Panigation from "../../components/Panigation/Panigation";
import "./mainContent.css";
MainContent.propTypes = {};

function MainContent(props) {
  const { sortby } = props;
  return (
    <div className="main-content">
      <TaskList />
      <Panigation />
    </div>
  );
}
export default MainContent;
