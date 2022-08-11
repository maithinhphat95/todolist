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

  // Render
  return (
    <div className="main-content">
      <TaskList sort={sort} />
      <Pagination />
    </div>
  );
}
export default MainContent;
