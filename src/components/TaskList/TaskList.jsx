import React from "react";
import Taskitem from "../TaskItem/Taskitem";
import "./tasklist.css";
TaskList.propTypes = {};

function TaskList(props) {
  let taskListArr = localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : [];
  return (
    <div className="task-list">
      {taskListArr.map((element, index) => (
        <Taskitem item={element} key={element.id} idx={index} />
      ))}
    </div>
  );
}

export default TaskList;
