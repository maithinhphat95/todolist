import React from "react";
import "./taskCreateBtn.css";
import { useState } from "react";
TaskCreateBtn.propTypes = {};

// Function của Create Task Button
function TaskCreateBtn(props) {
  const [status, setStatus] = useState(false);
  return (
    <div id="create-taskbox">
      <button
        className="create-btn"
        value=""
        onClick={() => {
          setStatus(!status);
        }}
      >
        Create New Task
      </button>
    </div>
  );
}
export default TaskCreateBtn;
