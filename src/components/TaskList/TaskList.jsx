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
      {/* <Taskitem taskTitle="Morning - Go to Work" taskCreator="Phat" />
      <Taskitem
        taskTitle="Mid-day - Working"
        taskCreator="Phat"
        taskDescript="Do the job at the company"
      />
      <Taskitem
        taskTitle="Afternoon - Working"
        taskCreator="Phat"
        taskDescription="Do the job at the company, submit the daily report"
      />
      <Taskitem
        taskTitle="Early-night - Study"
        taskCreator="Phat"
        taskDescription="Learning FE25, meet the pretty teacher"
      />
      <Taskitem
        taskTitle="Night - Study"
        taskCreator="Phat"
        taskDescription="Review the slide, do the Excersice"
      />
      <Taskitem
        taskTitle="Late-night - Sleep"
        taskCreator="Phat"
        taskDescription="Have a nice dream"
      />
      <Taskitem />
      <Taskitem /> */}
    </div>
  );
}

export default TaskList;
