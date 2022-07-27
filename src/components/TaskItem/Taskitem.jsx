import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./taskitem.css";
Taskitem.propTypes = {
  taskTitle: PropTypes.string,
  taskCreator: PropTypes.string,
  taskStatus: PropTypes.string,
  taskDescript: PropTypes.string,
};
Taskitem.defaultProps = {
  taskTitle: "Task Name",
  taskCreator: "Creator",
  taskStatus: "New",
  taskDescript: "This is a new task",
};
function Taskitem(props) {
  const { taskTitle, taskCreator, taskStatus, taskDescript } = props;
  const [btnStatus, setBtnStatus] = useState("Start");
  const [status, setStatus] = useState(taskStatus);
  const [statusColor, setColor] = useState("#14ae5c");
  function changeStatus() {
    if (status === "New") {
      setStatus("Doing");
      setBtnStatus("Done");
      setColor("orange");
    } else if (status === "Doing") {
      setStatus("Done");
      setBtnStatus("Renew");
      setColor("blue");
    } else if (status === "Done") {
      setStatus("New");
      setBtnStatus("Start");
      setColor("#14ae5c");
    }
  }
  return (
    <div className="task-item">
      <div>
        <b>Title: {taskTitle}</b>
        <p>Creator: {taskCreator}</p>
        <b style={{ color: statusColor }}>Status: {status}</b>
        <div className="task-description">
          <b>Description:</b>
          <p>{taskDescript}</p>
        </div>
      </div>
      <button className="status-btn" onClick={changeStatus}>
        {btnStatus}
      </button>
    </div>
  );
}
export default Taskitem;
