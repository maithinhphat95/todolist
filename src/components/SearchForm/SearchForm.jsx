import React from "react";
import PropTypes from "prop-types";
import "../SearchForm/searchForm.css";
SearchForm.propTypes = {};

function SearchForm(props) {
  return (
    <form className="search-form">
      <input
        className="form-item form-input"
        type="text"
        placeholder="Type something to search"
      />
      <button className="form-item search-btn">Search</button>
    </form>
  );
}

export default SearchForm;
