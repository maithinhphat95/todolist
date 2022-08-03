import React from "react";
import Taskitem from "../TaskItem/Taskitem";
import "./tasklist.css";
import { Mystorage } from "../Storage";
TaskList.propTypes = {};

function TaskList(props) {
  let taskListArr = localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : [];
  const { sort } = props;
  let dataShow = [];
  if (sort == "") {
    dataShow = taskListArr;
  } else {
    dataShow = taskListArr.filter((element) => element.status == sort);
  }

  return (
    <div className="task-list">
      {dataShow.map((item, index) => (
        <Taskitem item={item} key={item.id} idx={index} />
      ))}
    </div>
  );
}

export default TaskList;
