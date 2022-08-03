import React from "react";
import PropTypes from "prop-types";
import TaskList from "../../components/TaskList/TaskList";
import Panigation from "../../components/Panigation/Panigation";
import "./mainContent.css";
MainContent.propTypes = {};

function MainContent(props) {
  const { sort } = props;
  let data = JSON.parse(localStorage.getItem("taskList")) || [];
  let singlePage = data.length <= 8 ? true : false;
  console.log(sort);
  return (
    <div className="main-content">
      <TaskList sort={sort} />
      {singlePage ? null : <Panigation />}
    </div>
  );
}
export default MainContent;
