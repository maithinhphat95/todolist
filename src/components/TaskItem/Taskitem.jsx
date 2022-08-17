import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./taskitem.scss";
import { ALL_STATUS } from "../../constant";

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
  const { initialItem, handleChangeStatus } = props;
  const colorArr = ["var(--new-color)", "orange", "var(--primary-color)"];
  // Hook
  const [status, setStatus] = useState(initialItem.status);
  const [statusColor, setColor] = useState(
    colorArr[ALL_STATUS.indexOf(initialItem.status)]
  );

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
        onChange={(e) => {
          setStatus(e.target.value);
          setColor(colorArr[ALL_STATUS.indexOf(e.target.value)]);
          handleChangeStatus(initialItem, e.target.value);
        }}
        value={status}
      >
        {ALL_STATUS.length &&
          ALL_STATUS.map((element, index) => {
            return (
              <option key={index} value={element}>
                {element}
              </option>
            );
          })}
      </select>
    </div>
  );
}
export default Taskitem;
