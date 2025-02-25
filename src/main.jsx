import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
// import  {Toaster} from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
);
