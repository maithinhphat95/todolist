import React from "react";
import PropTypes from "prop-types";
import "./taskCreatBtn.css";
import CreatTaskModal from "../CreateTaskModal/CreateTaskModal";
import { useState } from "react";
TaskCreatBtn.propTypes = {};

// Function của Create Task Button
function TaskCreatBtn(props) {
  const [status, setStatus] = useState(false);
  return (
    <div id="createTaskBox">
      <button
        className="createBtn"
        value=""
        onClick={() => {
          setStatus(true);
        }}
      >
        Create New Task
      </button>
      <CreatTaskModal display={status} />
    </div>
  );
}

export default TaskCreatBtn;
