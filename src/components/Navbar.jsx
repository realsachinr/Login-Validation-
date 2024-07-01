import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(storedIsLoggedIn);
  }, []);

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    toast.error('Successfully created!');
    navigate("/"); // Navigate to the home page after logout
  };

  return (
    <div className="bg-[#1A142B] text-white">
      <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        <div className="w-[4rem]">
          <img
            src="https://r2.erweima.ai/imgcompressed/compressed_cca81ad21dcee8ccd6d9037978333a37.webp"
            alt="Logo"
          />
        </div>
        <nav>
          <ul className="text-richblack-100 flex gap-x-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-x-4">
          {!isLoggedIn ? (
            <>
              <Link to="/Login">
                <button className="bg-gray-500 text-black py-[8px] px-[12px] rounded-[8px] border border-black">
                  Login
                </button>
              </Link>
              <Link to="/Signup">
                <button className="bg-gray-500 text-black py-[8px] px-[12px] rounded-[8px] border border-black">
                  Sign up
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/Login"> 
                <button
                  onClick={logoutHandler}
                  className="bg-gray-800 text-white py-[8px] px-[12px] rounded-[8px] border border-black"
                >
                  Log Out
                </button>
              </Link>
              <Link to="/Dashboard">
                <button className="bg-gray-800 text-white py-[8px] px-[12px] rounded-[8px] border border-black">
                  Dashboard
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
