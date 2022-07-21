import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./taskitem.css";
Taskitem.propTypes = {
  taskName: PropTypes.string,
  authorName: PropTypes.string,
  itemStatus: PropTypes.string,
};
Taskitem.defaultProps = {
  taskName: "Task name Original",
};
function Taskitem(props) {
  const { taskName, authorName, itemStatus } = props;
  const [status, setStatus] = useState("Start");
  let btnString = "";

  return (
    <div className="task-item">
      <b>Title: {taskName}</b>
      <p>Creator: {authorName}</p>
      <b>Status: {status}</b>
      <div className="task-description">
        <b>Description:</b>
        <p>Get up, brush teeth, change the clothes and go for work</p>
      </div>
    </div>
    //   New card 2
  );
}
export default Taskitem;
