import React from "react";
import PropTypes from "prop-types";
import "./createTaskModal.scss";
import { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
import { Routes, Route, Link, Navigate } from "react-router-dom";

CreateTaskModal.propTypes = {};

// Function của modal
function CreateTaskModal(props) {
  // Init the data array
  let taskListArr = JSON.parse(localStorage.getItem("taskList")) || [];
  let count = taskListArr.length;
  // Function save the object task to the array
  let saveData = (obj) => {
    taskListArr.push(obj);
    localStorage.setItem("taskList", JSON.stringify(taskListArr));
  };
  // State Hook
  const [formValue, setFormValue] = useState({
    title: "",
    creator: "",
    descript: "",
    status: "New",
    id: count,
  });
  // Function handle the value changed
  let handleChangeValue = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  // Function handle the add button
  let handleAddForm = (e) => {
    e.preventDefault();
    // Validate data and save data
    // Validate blank input data
    let checkInput =
      formValue.title == "" ||
      formValue.creator == "" ||
      formValue.status == "" ||
      formValue.descript == "";
    // Validate the title is duplicated
    let checkTitle = taskListArr.every((e) => e.title != formValue.title);

    // Save the new task to data in the localstorage
    if (checkTitle && !checkInput) {
      formValue.id = count;
      // setFormValue({ ...formValue, id: 2 });
      saveData(formValue);
      count++;
      alert("A new task had been created");

      // navigate to "/taskList" (Home page)

      <Navigate replace to="/todolist/" />;
      // <Navigate to="/todolist/" replace={true} />;
      // <Redirect to="/todolist/" />;
    } else if (!checkTitle) {
      alert("Please input other task, the title is existing");
    } else if (checkInput) {
      alert("Please fill all information of the new task");
    }
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
        {/* Event button */}
        <div className="modal-action">
          <button type="submit">Add</button>
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
