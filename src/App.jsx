import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Signup from "./pages/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


    
  return (
    <div className="w-screen h-screen overflow-y-hidden flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route
          path="/Login"
          element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}  />}
        ></Route>
        <Route
          path="/Signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
