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
  // Prop
  const { initialItem, idx } = props;
  const colorArr = ["var(--new-color)", "orange", "var(--primary-color)"];
  const statusArr = ["New", "Doing", "Done"];
  // Hook
  const [status, setStatus] = useState(initialItem.status);
  const [statusColor, setColor] = useState(
    colorArr[statusArr.indexOf(initialItem.status)]
  );

  // Function change status
  let changeStatus = (e) => {
    setStatus(statusArr[e.target.value]);
    setColor(colorArr[e.target.value]);
  };

  return (
    <div className="task-item">
      <div>
        <b>Title: {initialItem.title}</b>
        <p>Creator: {initialItem.creator}</p>
        <b style={{ color: statusColor }}>Status: {status}</b>
        <div className="task-item-description">
          <b>Description:</b>
          <p>{initialItem.descript}</p>
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
