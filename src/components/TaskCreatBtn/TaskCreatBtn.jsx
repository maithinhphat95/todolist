import React from "react";
import PropTypes from "prop-types";
import "./taskCreatBtn.css";
TaskCreatBtn.propTypes = {};

function TaskCreatBtn(props) {
  function creatTaskModal() {}
  return (
    <button className="creatBtn" onClick={creatTaskModal}>
      Creat New Task
    </button>
  );
}

export default TaskCreatBtn;
