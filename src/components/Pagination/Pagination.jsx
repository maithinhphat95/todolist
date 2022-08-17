import React from "react";
import "./pagination.scss";
Pagination.propTypes = {};

function Pagination(props) {
  // Props
  const { currentPage, totalPage, onPageChange } = props;
  // Make the list page
  const listPage = Array.from(Array(totalPage + 1).keys()).slice(1);
  let selected = currentPage;

  return (
    <ul className="pagination">
      <li
        className="pagination-item"
        onClick={() => {
          onPageChange("pre", selected);
        }}
      >
        <i className="fa-solid fa-angle-left"></i>
      </li>
      {listPage.map((e) => (
        <li
          className="pagination-item"
          style={{
            backgroundColor: e == selected ? "gray" : null,
            color: e == selected ? "white" : null,
          }}
          key={e}
          onClick={() => {
            onPageChange(e, selected);
          }}
        >
          {e}
        </li>
      ))}
      <li
        className="pagination-item"
        onClick={() => {
          onPageChange("next", selected);
        }}
      >
        <i className="fa-solid fa-angle-right"></i>
      </li>
    </ul>
  );
}

export default Pagination;
