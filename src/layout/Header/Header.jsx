import React from "react";
import TaskCreateBtn from "../../components/TaskCreateBtn/TaskCreateBtn";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./header.css";
import { Link } from "react-router-dom";

function Header(props) {
  const { handleSearch } = props;
  return (
    <div className="header-container">
      <Link to="/todolist/create">
        <TaskCreateBtn />
      </Link>
      <SearchForm handleSearch={handleSearch} />
    </div>
  );
}

export default Header;
