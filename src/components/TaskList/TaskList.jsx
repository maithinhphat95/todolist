import React, { useEffect, useState } from "react";
import Taskitem from "../TaskItem/Taskitem";
import "./tasklist.css";
import storage from "../Storage";
import { ALL_STATUS, url } from "../../constant";

TaskList.propTypes = {};

function TaskList(props) {
  // Props
  const { sort } = props;
  // Hook
  const [taskList, setTaskList] = useState([]);

  // Get tasklist API
  useEffect(() => {
    // Fetch data from JSON server
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTaskList(data))
      .catch((error) => {
        console.log(error);
      });
  }, [sort]);

  // Init the data had been sort
  let dataSort = [];

  if (sort === "") {
    dataSort = taskList;
  } else {
    dataSort = taskList.filter((element) => element.status === sort);
  }

  const changeItemStatus = (selectedItem, changedStatus) => {
    // Call fetch API PUT update
    fetch(`${url}/${selectedItem.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({ ...selectedItem, status: changedStatus }),
    })
      .then((response) => response.json())
      .then(() => {
        const updatedTaskList = taskList.map((item) => {
          if (item.id === selectedItem.currentID) {
            item.status = [changedStatus];
            return item;
          }
          return item;
        });
        setTaskList(updatedTaskList);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="task-list">
      {dataSort.map((item, index) => (
        <Taskitem
          initialItem={item}
          key={item.id}
          handleChangeStatus={changeItemStatus}
        />
      ))}
    </div>
  );
}

export default TaskList;
