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
    <div className="pagination">
      <button
        className="pagination-item"
        style={{ color: currentPage === 1 ? "gray" : "" }}
        onClick={() => {
          onPageChange("pre", selected);
        }}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
      {listPage.map((e) => (
        <button
          className="pagination-item"
          style={{
            backgroundColor: e === selected ? "var(--primary-color)" : null,
            color: e === selected ? "white" : null,
          }}
          key={e}
          onClick={() => {
            onPageChange(e, selected);
          }}
        >
          {e}
        </button>
      ))}
      <button
        className="pagination-item"
        style={{ color: currentPage === totalPage ? "gray" : "" }}
        onClick={() => {
          onPageChange("next", selected);
        }}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
}

export default Pagination;
