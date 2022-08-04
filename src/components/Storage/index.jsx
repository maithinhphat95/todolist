import React from "react";
import PropTypes from "prop-types";

let storage = () => {
  let Mystorage = [];
  let status = ["New", "Doing", "Done"];
  for (let i = 0; i < 50; i++) {
    Mystorage[i] = {
      title: "Task" + i,
      creator: "Phat",
      status: status[Math.floor(Math.random() * status.length)],
      descript: "This is a new task",
      id: i,
    };
  }
  return Mystorage;
};

export default storage();
