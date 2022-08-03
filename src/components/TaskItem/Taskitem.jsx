import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./taskitem.scss";
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
  // Init the tasklist Array
  let taskListArr = localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : [];
  const colorArr = ["var(--new-color)", "orange", "blue"];
  const statusArr = ["New", "Doing", "Done"];
  const { item, idx } = props;
  const [status, setStatus] = useState(item.status);
  const [statusColor, setColor] = useState(
    colorArr[statusArr.indexOf(item.status)]
  );

  let changeStatus = (e) => {
    setStatus(statusArr[e.target.value]);
    setColor(colorArr[e.target.value]);
  };
  taskListArr[item.id].status = status;
  localStorage.setItem("taskList", JSON.stringify(taskListArr));

  return (
    <div className="task-item">
      <div>
        <b>Title: {item.title}</b>
        <p>Creator: {item.creator}</p>
        <b style={{ color: statusColor }}>Status: {status}</b>
        <div className="task-item-description">
          <b>Description:</b>
          <p>{item.descript}</p>
        </div>
      </div>
      <select
        style={{ display: "block", backgroundColor: statusColor }}
        onChange={changeStatus}
        value={statusArr.indexOf(status)}
      >
        {statusArr.length &&
          statusArr.map((element, index) => {
            return (
              <option key={index} value={index}>
                {element}
              </option>
            );
          })}
      </select>
    </div>
  );
}
export default Taskitem;
