import React from "react";
import Taskitem from "../TaskItem/Taskitem";
import "./tasklist.css";
import storage from "../Storage";
TaskList.propTypes = {};

function TaskList(props) {
  const { sort, display } = props;

  return (
    <div className="task-list">
      {display.map((item, index) => (
        <Taskitem item={item} key={item.id} idx={index} />
      ))}
    </div>
  );
}

export default TaskList;
