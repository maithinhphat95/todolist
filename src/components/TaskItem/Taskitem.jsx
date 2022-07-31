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
  const { item, idx } = props;
  const [status, setStatus] = useState(item.status);
  const [statusColor, setColor] = useState("var(--new-color)");
  const colorArr = ["var(--new-color)", "orange", "blue"];
  const statusArr = ["New", "Doing", "Done"];

  let changeStatus = (e) => {
    setStatus(statusArr[e.target.value]);
    setColor(colorArr[e.target.value]);
  };
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
      >
        {statusArr.length &&
          statusArr.map((status, index) => {
            return (
              <option key={index} value={index}>
                {status}
              </option>
            );
          })}
      </select>
    </div>
  );
}
export default Taskitem;
