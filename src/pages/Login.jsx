import React from "react";
import Template from "../components/Template";
import LoginImg from "../assets/LoginPageImg.svg"

function Login({setIsLoggedIn, isLoggedIn}) {
  return (
    <div>
      <Template
        image={LoginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

export default Login;
