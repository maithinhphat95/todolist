import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

Taskitem.propTypes = {
  taskName: PropTypes.string,
  authorName: PropTypes.string,
  time: PropTypes.number,
  taskItem: PropTypes.object,
};
Taskitem.defaultProps = {
  taskName: "Task name Original",
};
function Taskitem(props) {
  const { taskName, authorName, time } = props;
  const [status, setStatus] = useState("Start");
  // Init the object that has all information

  return (
    <div className="task-item">
      <p>Task title: {taskName}</p>
      <p>Author: {authorName}</p>
      <p>Time: {time}</p>
      <p>Status: {status}</p>
      <button onClick={() => setStatus("Start")}>Start</button>
      <button onClick={() => setStatus("Done")}>Done</button>
      <button onClick={() => setStatus("Doing")}>Doing</button>
      <button onClick={() => setStatus("Cancel")}>Cancel</button>
    </div>
    //   New card 2
  );
}
export default Taskitem;
