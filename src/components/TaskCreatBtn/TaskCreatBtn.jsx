import React from "react";
import PropTypes from "prop-types";
import "./taskCreatBtn.css";
import CreatTaskModal from "../CreateTaskModal/CreateTaskModal";
import { useState } from "react";
TaskCreatBtn.propTypes = {};

function TaskCreatBtn(props) {
  let [show, setShow] = useState(true);

  return (
    <div id="creatTaskBox">
      <input
        className="creatBtn"
        type="button"
        value="Creat New Task"
        onClick={() => {
          setShow(false);
        }}
      />
      <CreatTaskModal status={show} />
    </div>
  );
}

export default TaskCreatBtn;
