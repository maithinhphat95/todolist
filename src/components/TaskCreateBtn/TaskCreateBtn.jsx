import React from "react";
import PropTypes from "prop-types";
import "./taskCreateBtn.css";
import CreatTaskModal from "../CreateTaskModal/CreateTaskModal";
import { useState } from "react";
import MainContent from "../../layout/MainContent/MainContent";
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
          setStatus(!status);
        }}
      >
        {status ? "Home" : "Create New Task"}
      </button>
      {status ? <CreatTaskModal /> : <MainContent />}
    </div>
  );
}
export default TaskCreateBtn;
