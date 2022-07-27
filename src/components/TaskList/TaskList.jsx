import React from "react";
import Taskitem from "../TaskItem/Taskitem";
import "./tasklist.css";
TaskList.propTypes = {};

function TaskList(props) {
  let taskListArr = localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : [];
  console.log(taskListArr);
  return (
    <div className="task-list">
      {taskListArr.map((element) => (
        <Taskitem
          taskTitle={element.title}
          taskCreator={element.creator}
          taskDescript={element.descript}
        />
      ))}
    </div>
  );
}

export default TaskList;
