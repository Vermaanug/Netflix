import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { API_END_POINT, BACKGROUND } from "../utils/constant";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setIsLoading } from "../redux/userSlice";
import appStore from "../redux/appStore";
import Spinner from "./Spinner";

const Login = () => {
  const [isSignForm, setisSignForm] = useState(true);
  const [errorMessage, SeterrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((appStore) => appStore.user.isLoading);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = async () => {
    const message = checkValidData(email.current.value, password.current.value);
    SeterrorMessage(message);
    if (message) return;
    dispatch(setIsLoading(true));
    if (!isSignForm) {
      //Sign Up Logic
      const user = {
        FullName: name.current.value,
        Email: email.current.value,
        Password: password.current.value,
      };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
          name.current.value = "";
          email.current.value = "";
          password.current.value = "";
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }finally{
        dispatch(setIsLoading(false))
      }
    } else {
      //Sign in Logic
      const user = {
        Email: email.current.value,
        Password: password.current.value,
      };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user , {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(addUser(res.data.user));
          navigate("/browse");
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }finally{
        dispatch(setIsLoading(false))
      }
    }
  };

  const toggleclickbutton = () => {
    setisSignForm(!isSignForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BACKGROUND}
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
            {isLoading ? <Spinner/> : (isSignForm ? "Sign In" : "Sign Up")}
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
