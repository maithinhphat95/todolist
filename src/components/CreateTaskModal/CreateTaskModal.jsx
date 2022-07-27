import React from "react";
import PropTypes from "prop-types";
import "./createTaskModal.css";
import { useState } from "react";
import StorageList from "../Storage/storage";
import { kMaxLength } from "buffer";
CreateTaskModal.propTypes = {};
// Get the array of task list from local storage
let taskListArr = localStorage.getItem("taskList")
  ? JSON.parse(localStorage.getItem("taskList"))
  : [];
// Function của modal
function CreateTaskModal(props) {
  // State Hook
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [status, setStatus] = useState("");
  // Constructor function of each task item
  class TaskObject {
    constructor(title, creator, status, descript, order) {
      this.title = title;
      this.creator = creator;
      this.status = status;
      this.descript = descript;
      this.order = order;
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
  let order = 1;
  // Function handle the add button
  let addNewTask = () => {
    // Get the input element
    let titleInput = document.getElementById("title-id");
    let creatorInput = document.getElementById("creator-id");
    let statusInput = document.getElementById("status-id");
    let descriptInput = document.getElementById("status-id");
    // Create an object from input value
    let newTask = new TaskObject(
      titleInput.value,
      creatorInput.value,
      statusInput.value,
      descriptInput.value,
      order
    );
    console.log(newTask);
    // Save object to array
    saveArr(newTask);
    console.log(taskListArr);
    order++;
  };

  return (
    <div id="modal-container" className="">
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
          <select name="task-status" id="status-id">
            <option value={"New"}>New</option>
            <option value={"Doing"}>Doing</option>
            <option value={"Done"}>Done</option>
          </select>
        </div>
        {/* Description */}
        <div className="modal-item">
          <label htmlFor="description-id">Description:</label>{" "}
          <textarea name="" id="description-id" cols="30" rows="5"></textarea>
        </div>
        {/* Button submit */}
        <div className="modal-action">
          {/* Button add task item */}
          <button type="button" onClick={addNewTask}>
            Add
          </button>
          {/* Button reset the input value */}
          <button type="reset">Clear</button>
        </div>
      </form>
    </div>
  );
}
export default CreateTaskModal;
