import React from "react";
import Taskitem from "../TaskItem/Taskitem";
import "./tasklist.css";
import { Mystorage } from "../Storage";
TaskList.propTypes = {};

function TaskList(props) {
  let taskListArr = localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : [];

  return (
    <div className="task-list">
      {taskListArr.map((item, index) => (
        <Taskitem item={item} key={index} idx={index} />
      ))}
    </div>
  );
}

export default TaskList;
