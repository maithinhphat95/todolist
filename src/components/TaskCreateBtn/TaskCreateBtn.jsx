import React from "react";
import PropTypes from "prop-types";
import "./taskCreateBtn.css";
import CreatTaskModal from "../CreateTaskModal/CreateTaskModal";
import { useState } from "react";
TaskCreateBtn.propTypes = {};

// Function của Create Task Button
function TaskCreateBtn(props) {
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

export default TaskCreateBtn;
