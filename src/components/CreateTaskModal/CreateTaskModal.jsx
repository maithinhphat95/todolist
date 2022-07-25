import React from "react";
import PropTypes from "prop-types";
import "./createTaskModal.css";
import { useState } from "react";
CreateTaskModal.propTypes = {};

function CreateTaskModal(props) {
  const [show, setShow] = useState("block");

  // const [close, setClose] = useState(display);
  return (
    <div
      id="modal-container"
      className="modal-container"
      style={{ display: props.status ? "none" : show }}
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
              <option value={"New"} selected>
                New
              </option>
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
          <button type="button">Add</button>
          <button type="reset">Clear</button>
          <button
            onClick={() => {
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
