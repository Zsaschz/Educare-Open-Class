import Axios from "axios";

export const api = Axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
