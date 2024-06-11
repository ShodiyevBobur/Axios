import axios from "axios";

const intance = axios.create({
  baseURL: "https:dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default intance;
