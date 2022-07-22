import React from "react";
import PropTypes from "prop-types";
import TaskCreatBtn from "../TaskCreatBtn/TaskCreatBtn";
import SearchForm from "../SearchForm/SearchForm";
import "./header.css";

Header.propTypes = {};

function Header(props) {
  return (
    <div className="header-container">
      <TaskCreatBtn />
      <SearchForm />
    </div>
  );
}

export default Header;
