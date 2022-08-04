import React from "react";
import PropTypes from "prop-types";
import TaskList from "../../components/TaskList/TaskList";
import Panigation from "../../components/Panigation/Panigation";
import storage from "../../components/Storage";
import "./mainContent.css";
MainContent.propTypes = {};

function MainContent(props) {
  const { sort } = props;
  // Get the data array from localstorage
  let data = JSON.parse(localStorage.getItem("taskList")) || [];
  let singlePage = data.length <= 8 ? true : false;
  // Use the random datas
  if (
    data.length == 0 &&
    window.confirm(
      "The localstorage doesn't have any data. Do you want to you random datas?"
    )
  ) {
    data = storage;
    localStorage.setItem("taskList", JSON.stringify(data));
  }
  // Init the data had been sort
  let dataSort = [];
  if (sort == "") {
    dataSort = data;
  } else {
    dataSort = data.filter((element) => element.status == sort);
  }

  return (
    <div className="main-content">
      <TaskList sort={sort} display={dataSort} />
      {singlePage ? null : <Panigation />}
    </div>
  );
}
export default MainContent;
