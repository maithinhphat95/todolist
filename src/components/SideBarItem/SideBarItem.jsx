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
    // // This process will change the state of sort variable then render the page, so we have to click twice to navigate page
    // <div>
    //   <Link to={"/todolist/" + sort}>
    //     <div className="sidebar-item">
    //       <button
    //         onClick={() => {
    //           setSort(
    //             buttonText === "New Task"
    //               ? "new"
    //               : buttonText === "Doing Task"
    //               ? "doing"
    //               : buttonText === "Done Task"
    //               ? "done"
    //               : ""
    //           );
    //         }}
    //       >
    //         {buttonText}
    //       </button>
    //     </div>
    //   </Link>
    // </div>

    <div className="sidebar-item">
      <button>{buttonText}</button>
    </div>
  );
}

export default SideBarItem;
