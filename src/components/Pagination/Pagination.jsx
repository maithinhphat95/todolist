import React from "react";
import PropTypes from "prop-types";
import "./pagination.scss";
import TaskList from "../TaskList/TaskList";
Pagination.propTypes = {};

function Pagination(props) {
  const { limitPage, currentPage, maxPageLitmit, minPageLimit } = props;
  const totalPage = Math.ceil(
    JSON.parse(localStorage.getItem("taskList")).length / limitPage
  ).toFixed(0);
  console.log(totalPage);
  return (
    <div className="pagination">
      <div className="pagination-item">
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div className="pagination-item">1</div>
      <div className="pagination-item">2</div>
      <div className="pagination-item">3</div>
      <div className="pagination-item">
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
