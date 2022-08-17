import React, { useEffect, useState } from "react";
import TaskList from "../../components/TaskList/TaskList";
import Pagination from "../../components/Pagination/Pagination";
import "./mainContent.css";
import { httpRequest } from "../../constant";

MainContent.propTypes = {};

function MainContent(props) {
  // Props
  const { sort, search } = props;
  // Hook
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  // Init variables
  let dataSort = []; //The data after sort
  let pageShow = []; //The data will be show
  const limited = 10;
  let totalPage = 0;
  // Get tasklist API by use axios
  useEffect(() => {
    // Get API to take the tasklist
    httpRequest
      .get()
      .then((response) => {
        setTaskList(response.data);
        setCurrentPage(1);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sort]);

  // Sort the data
  if (sort === "") {
    if (search === "") {
      dataSort = [...taskList];
    } else {
      dataSort = taskList.filter((item) => item.title.includes(search));
    }
  } else {
    dataSort = taskList.filter((element) => element.status === sort);
  }
  // Limit the page
  pageShow = dataSort.slice((currentPage - 1) * limited, currentPage * limited);
  totalPage = dataSort ? Math.ceil(dataSort.length / limited) : 1;

  // Handle the change page of pagination
  const handlePageChange = (goto, current) => {
    // re-render the page base on pagination
    if (goto === "pre") {
      if (current > 1) {
        setCurrentPage(current - 1);
      }
    } else if (goto === "next") {
      if (current < totalPage) {
        setCurrentPage(current + 1);
      }
    } else if (goto !== current) {
      setCurrentPage(goto);
    }
  };

  const handleChangeStatus = (selectedItem, changedStatus) => {
    // Call put API by use axios library:
    httpRequest
      .put(`/${selectedItem.id}`, { ...selectedItem, status: changedStatus })
      .then((response) => {
        // console.log(response.data);
        // Update the state tasklist of component: nếu không có thì chỉ UI thay đổi, còn state của component k thay đổi, chi khi mount lại component thì state mới thay đổi
        const updatedTaskList = taskList.map((item) => {
          if (item.id === selectedItem.currentID) {
            item.status = [changedStatus];
            return item;
          }
          return item;
        });
        setTaskList(updatedTaskList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Render
  return (
    <div className="main-content">
      {loading && (
        <div className=" loading">
          <p> Data is loading...</p>
          <img src="loading_icon.gif" style={{ height: 200 }} alt=""></img>
        </div>
      )}
      <TaskList display={pageShow} handleChangeStatus={handleChangeStatus} />
      {totalPage > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
export default MainContent;
