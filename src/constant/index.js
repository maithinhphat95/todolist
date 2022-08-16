import axios from "axios";

// URL for data API
export const url = "http://localhost:3005/data";
export const httpRequest = axios.create({
  baseURL: url,
  timeout: 1500,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});
// All status for todo item
export const ALL_STATUS = ["New", "Doing", "Done"];
