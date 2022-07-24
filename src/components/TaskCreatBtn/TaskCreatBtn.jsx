import React from "react";
import PropTypes from "prop-types";
import "./taskCreatBtn.css";
import CreatTaskModal from "../CreateTaskModal/CreateTaskModal";
import { useState } from "react";
TaskCreatBtn.propTypes = {};

function TaskCreatBtn(props) {
  let [show, setShow] = useState(false);
  function showModal() {
    setShow(!show);
  }

  return (
    <div id="creatTaskBox">
      <input
        className="creatBtn"
        type="button"
        value="Creat New Task"
        onClick={showModal}
      />
      {show ? <CreatTaskModal displayResult={show} /> : "none"}
      {/* <CreatTaskModal displayResult={show} /> */}
    </div>
  );
}

export default TaskCreatBtn;
