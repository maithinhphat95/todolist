import React from "react";
import "./createTaskModal.scss";
import { useState } from "react";
import { httpRequest } from "../../constant";
import { Link, useNavigate } from "react-router-dom";

function CreateTaskModal(props) {
  // State Hook
  const [formValue, setFormValue] = useState({
    title: "",
    creator: "",
    status: "New",
    descript: "",
  });
  // Init data of tasklist
  const [data, setData] = useState([]);

  // Init the variable
  const navigate = useNavigate();

  // Call GET API by axios:
  httpRequest.get().then((response) => setData(response.data));

  // Function handle the value changed
  const handleChangeValue = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  // Function handle the add button
  const handleCreateTask = (e) => {
    e.preventDefault();

    // Validate data and save data
    let checkInput =
      formValue.title === "" ||
      formValue.creator === "" ||
      formValue.status === "" ||
      formValue.descript === "";

    // Validate the title is duplicated
    let checkTitle = data.every((e) => e.title !== formValue.title);

    // Save the new task to data in the localstorage
    if (checkTitle && !checkInput) {
      // Call post API by use axios:
      httpRequest
        .post("", JSON.stringify(formValue))
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      // Noti and navigate
      alert("Congratulation!!! A new task had been created");
      navigate("/todolist/", { replace: true });
    } else if (!checkTitle) {
      alert("Error!!! Please input other task, the title is existing");
    } else {
      alert("Error!!! Please fill all information of the new task");
    }
  };

  // Render
  return (
    <div id="modal-container" className="modal">
      {/* Form input new Task */}
      <form className="modal-form" onSubmit={handleCreateTask}>
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
