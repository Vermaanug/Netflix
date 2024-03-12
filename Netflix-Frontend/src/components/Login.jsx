import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const [isSignForm, setisSignForm] = useState(true);
  const [errorMessage , SeterrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {

    const message = checkValidData(email.current.value , password.current.value )
    SeterrorMessage(message)

  };

  const toggleclickbutton = () => {
    setisSignForm(!isSignForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/12 bg-black p-5 text-white bg-opacity-80 h-3/5 pt-20"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="px-6 font-bold text-3xl">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        <div className="flex flex-col p-4">
          {!isSignForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 my-2 bg-gray-700 rounded-sm"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 my-2 bg-gray-700 rounded-sm"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-2 bg-gray-700 rounded-sm"
          />
          <p className="text-red-600 font-thin">{errorMessage}</p>
          <button
            className="p-2 my-2 bg-red-700 rounded-sm"
            onClick={handleButtonClick}
          >
            {isSignForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex justify-between">
            <div>
              <input type="checkbox" name="Remember Me" />
              <span className="px-1">Remember Me</span>
            </div>
            <span className="cursor-pointer">Forgot Password?</span>
          </div>
          <div className="py-7 px-1">
            <span className="cursor-pointer " onClick={toggleclickbutton}>
              {isSignForm
                ? "New to Netflix? Sign Up Now"
                : "Already a member? Sign In"}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
