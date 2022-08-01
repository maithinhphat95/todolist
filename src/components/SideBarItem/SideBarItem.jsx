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
    <div className="sidebar-item">
      <Link to={"/" + sort}>
        <button
          onClick={() => {
            setSort(
              buttonText == "New Task"
                ? "new"
                : buttonText == "Doing Task"
                ? "doing"
                : buttonText == "Done Task"
                ? "done"
                : ""
            );
            console.log(sort);
          }}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
}

export default SideBarItem;
