import React, { useEffect, useState } from "react";
import Taskitem from "../TaskItem/Taskitem";
import "./tasklist.css";
import { httpRequest } from "../../constant";

TaskList.propTypes = {};

function TaskList(props) {
  // Props
  const { sort } = props;
  // Hook
  const [taskList, setTaskList] = useState([]);

  // Get tasklist API by use axios
  useEffect(() => {
    httpRequest
      .get()
      .then((response) => {
        setTaskList(response.data);
      })
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
    // Call put API by use axios library:
    httpRequest
      .put(`/${selectedItem.id}`, { ...selectedItem, status: changedStatus })
      .then((response) => {
        // console.log(response.data);
        // Update the state tasklist of component: nếu không có thì chỉ UI thay đổi, còn state của component k thay đổi, chi khi mount lại component thì state mới thay đổi
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
