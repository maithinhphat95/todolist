import React from "react";
import PropTypes from "prop-types";
import "./taskCreatBtn.css";
import CreatTaskModal from "../CreatTaskModal/CreatTaskModal";
import { useState } from "react";
TaskCreatBtn.propTypes = {};

function TaskCreatBtn(props) {
  return (
    <div id="creatTaskBox">
      <button className="creatBtn" onClick={() => {}}>
        Creat New Task
      </button>
      <CreatTaskModal />
    </div>
  );
}

export default TaskCreatBtn;
