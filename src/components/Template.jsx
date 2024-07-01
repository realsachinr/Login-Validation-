import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Template = ({ image, formtype, setIsLoggedIn, isLoggedIn }) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center overflow-y-hidden ">
      <div className="w-[60rem] -mt-20 h-32 flex  justify-between items-center">
        <div className=" ">
          {formtype === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
           
            />
          )}
        </div>

        <div className=" w-[30rem]  ">
          <img
            src={image}
            alt="login image"
            width={558}
            height={504}
            loading="lazy"
          
          />
        </div>
      </div>
    </div>
  );
};
export default Template;
