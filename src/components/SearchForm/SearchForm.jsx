import React from "react";
import PropTypes from "prop-types";
import "./searchform.css";
SearchForm.propTypes = {};

function SearchForm(props) {
  return (
    <form action="" className="search-form">
      <input
        className="form-item form-input"
        type="text"
        placeholder="Please input the Task Title"
      />
      <button className="form-item search-btn">Search</button>
    </form>
  );
}

export default SearchForm;
