import React from "react";
import PropTypes from "prop-types";
import TaskCreateBtn from "../../components/TaskCreateBtn/TaskCreateBtn";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./header.css";
import { Link } from "react-router-dom";

Header.propTypes = {};

function Header(props) {
  return (
    <div className="header-container">
      <Link to="/create">
        <TaskCreateBtn />
      </Link>
      <SearchForm />
    </div>
  );
}

export default Header;
