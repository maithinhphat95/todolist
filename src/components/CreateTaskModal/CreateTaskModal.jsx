import React from "react";
import PropTypes from "prop-types";
import "./createTaskModal.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

CreateTaskModal.propTypes = {};

let taskListArr = JSON.parse(localStorage.getItem("taskList")) || [];
let count = taskListArr.length;
// Function của modal
function CreateTaskModal(props) {
  // State Hook
  const [taskObject, setTaskObject] = useState({
    title: "",
    creator: "",
    status: "",
    descript: "",
    id: "",
  });
  // Constructor function of each task item
  class TaskObject {
    constructor(title, creator, status, descript, id) {
      this.title = title;
      this.creator = creator;
      this.status = status;
      this.descript = descript;
      this.id = count;
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

  // Function handle the add button
  let addNewTask = () => {
    // Get the input element
    let titleInput = document.getElementById("title-id");
    let creatorInput = document.getElementById("creator-id");
    let statusInput = document.getElementById("status-id");
    let descriptInput = document.getElementById("description-id");
    // Create an object from input value
    let newTask = new TaskObject(
      titleInput.value,
      creatorInput.value,
      statusInput.value,
      descriptInput.value,
      count
    );
    console.log(count);
    count++;

    // Save object to array
    if (
      !titleInput.value ||
      !creatorInput.value ||
      !statusInput.value ||
      !descriptInput.value
    ) {
      return;
    } else {
      saveArr(newTask);
      console.log(taskListArr);
      alert("A new task had been created");
      document.querySelector("button[type='reset']").click();
    }
  };

  return (
    <div id="modal-container" className="modal">
      {/* Form input new Task */}
      <form className="modal-form">
        <h1>Creat a new Task</h1>
        {/* Title */}
        <div className="modal-item">
          <label htmlFor="title-id">Title:</label>{" "}
          <input type="text" name="title" id="title-id" />{" "}
        </div>
        {/* Creator */}
        <div className="modal-item">
          <label htmlFor="creator-id">Creator:</label>{" "}
          <input type="text" name="creator" id="creator-id" />{" "}
        </div>
        {/* Status */}
        <div className="modal-item">
          <label htmlFor="status-id">Status:</label>{" "}
          <select className="task-status" name="status" id="status-id">
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
          ></textarea>
        </div>
        {/* Button submit */}
        <div className="modal-action">
          {/* Button add task item */}
          <button type="button" onClick={addNewTask}>
            Add
          </button>
          {/* Button reset the input value */}
          <button type="reset">Clear</button>
          <Link to="/">
            <button>Close</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default CreateTaskModal;
