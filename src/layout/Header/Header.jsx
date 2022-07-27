import React from "react";
import PropTypes from "prop-types";
import TaskCreateBtn from "../../components/TaskCreateBtn/TaskCreateBtn";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./header.css";

Header.propTypes = {};

function Header(props) {
  return (
    <div className="header-container">
      <TaskCreateBtn />
      <SearchForm />
    </div>
  );
}

export default Header;
