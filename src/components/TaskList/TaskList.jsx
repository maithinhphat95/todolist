import React, { useEffect, useState } from "react";
import Taskitem from "../TaskItem/Taskitem";
import "./tasklist.css";
import { httpRequest } from "../../constant";

TaskList.propTypes = {};

function TaskList(props) {
  // Props
  const { handleChangeStatus, display } = props;

  return (
    <div className="task-list">
      {display.map((item) => (
        <Taskitem
          initialItem={item}
          key={item.id}
          handleChangeStatus={handleChangeStatus}
        />
      ))}
    </div>
  );
}

export default TaskList;
