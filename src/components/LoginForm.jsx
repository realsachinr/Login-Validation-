import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function LoginForm({ setIsLoggedIn, isLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Check localStorage for login state when the component mounts
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedIsLoggedIn = localStorage.getItem("isLoggedIn");

    if (savedUsername && savedIsLoggedIn === "true") {
      setUsername(savedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    // Perform login logic here
    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", "true");
    // navigate("/Dashboard");
  }
  if (isLoggedIn) {
    return <Navigate to="/dashboard"></Navigate>;
  }

  return (
    <div className="flex pl-6 flex-col ">
      <span className=" font-playwrite text-[30px] font-semibold">
        Welcome To Login
      </span>
      <p className="max-w-[21rem] pb-5 text-gray-500 ">
        To keep connected with us plaese login with your personal information by
        email address and password.
      </p>

      <form className="flex flex-col gap-4" onSubmit={submitHandler}>
        <div className="w-full">
          <label htmlFor="email">Email</label> <br />
          <input
            className="border w-full rounded-2xl py-1  px-3  border-black"
            type="email"
            id="email"
            name="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            className="border rounded-2xl py-1  px-3  w-full border-black"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Submit
        </button>
      </form>
      <div>
        <p className="text-gray-500">
          Forgot Password?{" "}
          <a href="#" className="text-blue-500 hover:text-blue-600">
            Click here
          </a>
        </p>
        <p className="text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:text-blue-600">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
