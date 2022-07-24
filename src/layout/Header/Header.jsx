import React from "react";
import PropTypes from "prop-types";
import TaskCreatBtn from "../../components/TaskCreatBtn/TaskCreatBtn";
import SearchForm from "../../components/SearchForm/SearchForm";
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
