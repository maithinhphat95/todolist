import React, { useState } from "react";
import "../SearchForm/searchForm.scss";
import { Link } from "react-router-dom";
SearchForm.propTypes = {};

function SearchForm(props) {
  const { handleSearch } = props;
  const [searchText, setSearchText] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <form className="search-form">
      <input
        className="form-item form-input"
        type="text"
        value={inputValue}
        placeholder="Type something to search"
        onChange={(e) => {
          setSearchText(e.target.value);
          setInputValue(e.target.value);
        }}
      />

      <Link
        to="/todolist/search"
        className="form-item search-btn"
        onClick={(e) => {
          handleSearch(searchText);
          setInputValue("");
        }}
      >
        Search
      </Link>
    </form>
  );
}

export default SearchForm;
