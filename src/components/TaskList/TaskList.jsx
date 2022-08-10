import React, { useEffect, useState } from "react";
import Taskitem from "../TaskItem/Taskitem";
import "./tasklist.css";
import storage from "../Storage";
import { url } from "../../constant";

TaskList.propTypes = {};

function TaskList(props) {
  // Props
  const { sort, display } = props;

  return (
    <div className="task-list">
      {display.map((item, index) => (
        <Taskitem initialItem={item} key={item.id} idx={index} />
      ))}
    </div>
  );
}

export default TaskList;
