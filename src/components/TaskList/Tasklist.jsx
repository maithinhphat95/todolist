import React from "react";
import Taskitem from "../TaskItem/Taskitem";
import "./tasklist.css";
TaskList.propTypes = {};

function TaskList(props) {
  return (
    <div className="task-list">
      <Taskitem taskName="Morning - Go to Work" taskAuthor="Phat" />
      <Taskitem
        taskName="Mid-day - Working"
        taskAuthor="Phat"
        taskDescription="Do the job at the company"
      />
      <Taskitem
        taskName="Afternoon - Working"
        taskAuthor="Phat"
        taskDescription="Do the job at the company, submit the daily report"
      />
      <Taskitem
        taskName="Early-night - Study"
        taskAuthor="Phat"
        taskDescription="Learning FE25, meet the pretty teacher"
      />
      <Taskitem
        taskName="Night - Study"
        taskAuthor="Phat"
        taskDescription="Review the slide, do the Excersice"
      />
      <Taskitem
        taskName="Late-night - Sleep"
        taskAuthor="Phat"
        taskDescription="Have a nice dream"
      />
      <Taskitem />
      <Taskitem />
    </div>
  );
}

export default TaskList;
