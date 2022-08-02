import React from "react";
import PropTypes from "prop-types";
import "./createTaskModal.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

CreateTaskModal.propTypes = {};

// Function của modal
function CreateTaskModal(props) {
  // Init the data array
  let taskListArr = JSON.parse(localStorage.getItem("taskList")) || [];
  let count = taskListArr.length;
  // State Hook
  const [taskObject, setTaskObject] = useState({
    title: "",
    creator: "",
    status: "",
    descript: "",
    id: count,
  });

  // Function save the object task to the array
  let saveData = (obj) => {
    taskListArr.push(obj);
    localStorage.setItem("taskList", JSON.stringify(taskListArr));
  };

  // Function handle the value changed
  let handleChangeValue = (e) => {
    setTaskObject({ ...taskObject, [e.target.name]: e.target.value });
  };
  // Function handle the add button
  let handleAddForm = (e) => {
    e.preventDefault();
    // Valid data and save data
    let checkTitle = taskListArr.every((e) => e.title != taskObject.title);
    let checkInput =
      taskObject.title == "" ||
      taskObject.creator == "" ||
      taskObject.status == "" ||
      taskObject.descript == "";
    if (checkTitle && checkInput) {
      setTaskObject({ ...taskObject, id: taskListArr.length });
      saveData(taskObject);
      count++;
      alert("A new task had been created");
    } else if (!checkTitle) {
      alert("Please input other task, the title is existing");
    } else if (!checkInput) {
      alert("Please fill all information of the new task");
    }
    console.log(taskObject);
    console.log(taskListArr);
    console.log(count);
    // navigate to "/taskList" (Home page)
  };

  return (
    <div id="modal-container" className="modal">
      {/* Form input new Task */}
      <form className="modal-form" onSubmit={handleAddForm}>
        <h1>Creat a new Task</h1>
        {/* Title */}
        <div className="modal-item">
          <label htmlFor="title-id">Title:</label>{" "}
          <input
            type="text"
            name="title"
            id="title-id"
            onChange={handleChangeValue}
          />
        </div>
        {/* Creator */}
        <div className="modal-item">
          <label htmlFor="creator-id">Creator:</label>{" "}
          <input
            type="text"
            name="creator"
            id="creator-id"
            onChange={handleChangeValue}
          />
        </div>
        {/* Status */}
        <div className="modal-item">
          <label htmlFor="status-id">Status:</label>
          <select
            className="task-status"
            name="status"
            id="status-id"
            onChange={handleChangeValue}
            valueDefault="New"
          >
            <option value={"New"}>New</option>
            <option value={"Doing"}>Doing</option>
            <option value={"Done"}>Done</option>
          </select>
        </div>
        {/* Description */}
        <div className="modal-item">
          <label htmlFor="description-id">Description:</label>{" "}
          <textarea
            id="description-id"
            name="descript"
            cols="30"
            rows="5"
            onChange={handleChangeValue}
          ></textarea>
        </div>
        <div className="modal-action">
          {/* Button add task item */}
          <button type="submit">Add</button>
          {/* Button reset the input value */}
          <button type="reset">Clear</button>
          <Link to="/todolist/">
            <button>Close</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default CreateTaskModal;
