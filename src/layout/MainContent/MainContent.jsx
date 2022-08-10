import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TaskList from "../../components/TaskList/TaskList";
import Pagination from "../../components/Pagination/Pagination";
import "./mainContent.css";
import { url } from "../../constant";

MainContent.propTypes = {};

function MainContent(props) {
  // Props
  const { sort } = props;
  // Hook
  const [tastList, setTasklist] = useState([]);
  useEffect(() => {
    // Fetch data from JSON server
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTasklist(data));
  }, []);

  // Init the data had been sort
  let dataSort = [];
  if (sort === "") {
    dataSort = tastList;
  } else {
    dataSort = tastList.filter((element) => element.status === sort);
  }
  let changeDisplay = (arr) => {};
  // Render
  return (
    <div className="main-content">
      <TaskList sort={sort} display={dataSort} changedSort={changeDisplay} />
      <Pagination />
    </div>
  );
}
export default MainContent;
