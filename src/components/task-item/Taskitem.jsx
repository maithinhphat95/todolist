import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./taskitem.css";
Taskitem.propTypes = {
  taskName: PropTypes.string,
  taskAuthor: PropTypes.string,
  taskStatus: PropTypes.string,
  taskDescription: PropTypes.string
};
Taskitem.defaultProps = {
  taskName: "Task Name",
  taskAuthor: "Author",
  taskStatus: "New",
  taskDescription: "Get up, brush teeths, change the uniform and go for work"
};
function Taskitem(props) {
  const { taskName, taskAuthor, taskStatus, taskDescription } = props;
  const [btnStatus, setBtnStatus] = useState("Start");
  const [status, setStatus] = useState(taskStatus);
  const [statusColor, setColor] = useState("#14ae5c")
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
        <b>Title: {taskName}</b>
        <p>Creator: {taskAuthor}</p>
        <b style={{ color: statusColor }} >Status: {status}</b>
        <div className="task-description">
          <b>Description:</b>
          <p>{taskDescription}</p>
        </div>
      </div>
      <button className="status-btn" onClick={changeStatus} >{btnStatus}</button>
    </div >
  );
}
export default Taskitem;
