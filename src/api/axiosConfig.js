import axios from "axios";

export default axios.create({
  baseURL: "https://d2e7-5-151-3-183.eu.ngrok.io/",
  headers: { "ngrok-skip-browser-warning": "true" },
});
