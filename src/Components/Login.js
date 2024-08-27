import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute inset-0 z-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt="bg"
          className="object-cover"
        />
      </div>
      <div className="flex justify-center items-center h-full relative z-10 ">
        <form className="p-12 w-3/12 bg-black text-white rounded-md bg-opacity-80">
          <h1 className="font-bold text-2xl p-3 my-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full name"
              className="p-4 my-3 w-full rounded-md bg-gray-800 "
            />
          )}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="p-4 my-3 w-full rounded-md bg-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-3 w-full rounded-md bg-gray-800 "
          />
          <button className="p-4 my-3 bg-red-700 rounded-md w-full ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now."
              : "Already a User? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
