import React from "react";
import PropTypes from "prop-types";
import "./createTaskModal.css";
import { useState } from "react";
CreateTaskModal.propTypes = {};

// Function của modal
function CreateTaskModal(props) {
  const { display } = props;
  const [show, setShow] = useState("block");
  // Get the array of task list from local storage
  let taskListArr = localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : [];
  //
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");
  // Constructor function of each task item
  class TaskItemObject {
    constructor(title, author, status, descript) {
      this.title = title;
      this.author = author;
      this.status = status;
      this.descript = descript;
    }
  }

  // Function save the object task to the array
  let saveArr = (obj) => {
    taskListArr.push(obj);
    storeArr(taskListArr);
  };
  // Function store the array to the localstorage
  let storeArr = (arr) => {
    localStorage.setItem("taskList", JSON.stringify(arr));
  };
  // Get the input element: Maybe it will not work because the element isn't still created
  let titleInput = document.getElementById("title-id");
  let authorInput = document.getElementById("author-id");
  let statusInput = document.getElementById("status-id");
  let descriptInput = document.getElementById("status-id");
  // Function handle the add button
  let addNewTask = () => {
    // Create an object from input value
    let newTask = new TaskItemObject(
      titleInput.value,
      authorInput.value,
      statusInput.value,
      descriptInput.value
    );
    // Save object to array
    saveArr(newTask);
  };
  return (
    <div
      id="modal-container"
      className="modal-container"
      style={{ display: display ? show : "none" }}
    >
      {/* Form input new Task */}
      <form className="modal-form">
        <h1>Creat a new Task</h1>
        {/* Title */}
        <div className="modal-item">
          <label htmlFor="title-id">Title:</label>{" "}
          <input type="text" id="title-id" />{" "}
        </div>
        {/* Creator */}
        <div className="modal-item">
          <label htmlFor="creator-id">Creator:</label>{" "}
          <input type="text" id="creator-id" />{" "}
        </div>
        {/* Status */}
        <div className="modal-item">
          <label htmlFor="status-id">Status:</label>{" "}
          <div className="modal-input">
            <select name="task-status" id="status-id">
              <option value={"New"}>New</option>
              <option value={"Doing"}>Doing</option>
              <option value={"Done"}>Done</option>
            </select>
          </div>
        </div>
        {/* Description */}
        <div className="modal-item">
          <label htmlFor="description-id">Description:</label>{" "}
          <textarea name="" id="description-id" cols="30" rows="5"></textarea>
        </div>
        {/* Button submit */}
        <div className="modal-action">
          <button type="button" onClick={addNewTask}>
            Add
          </button>
          <button type="reset">Clear</button>
          <button
            onClick={(e) => {
              // e.preventDefault();
              setShow("none");
            }}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateTaskModal;
