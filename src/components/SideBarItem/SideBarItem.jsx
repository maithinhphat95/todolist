import React, { useState } from "react";
import PropTypes from "prop-types";
import "./sideBarItem.scss";
import { Link } from "react-router-dom";
import MainContent from "../../layout/MainContent/MainContent";

SideBarItem.propTypes = {
  buttonText: PropTypes.string,
};

function SideBarItem(props) {
  const [sort, setSort] = useState("");
  const { buttonText } = props;
  return (
    <div>
      <Link to={"/todolist/" + sort}>
        <div className="sidebar-item">
          <button
            onClick={() => {
              setSort(
                buttonText === "New Task"
                  ? "new"
                  : buttonText === "Doing Task"
                  ? "doing"
                  : buttonText === "Done Task"
                  ? "done"
                  : ""
              );
            }}
          >
            {buttonText}
          </button>
        </div>
      </Link>
    </div>
  );
}

export default SideBarItem;
