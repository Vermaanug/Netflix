import React from "react";
import { useSelector, useDispatch } from "react-redux";
import appStore from "../redux/appStore";
import axios from "axios";
import { API_END_POINT, LOGO } from "../utils/constant";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../redux/userSlice";
import { setToggle } from "../redux/movieSlice";

const Header = () => {
  const currentUser = useSelector((appStore) => appStore.user.currentUser);
  const toggle = useSelector((appStore) => appStore.movies.toggle);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        dispatch(removeUser());
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchMovie = () => {
    dispatch(setToggle())
  }

  return currentUser ? (
    <div className="absolute w-full m-auto bg-gradient-to-b from-black flex justify-around z-10">
      <div className="py-2">
        <img className="w-36" src={LOGO} alt="logo" />
      </div>
      <div className="flex justify-between">
        <h1 className="my-5 text-xl text-white">{currentUser.FullName}</h1>
        <button
          className="ml-6 px-2 mt-4 mb-6 bg-red-600 rounded-sm text-white text-sm font-semibold cursor-pointer hover:bg-red-800"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
        <button className="ml-3 px-2 mt-4 mb-6 bg-red-600 rounded-sm text-white text-sm font-semibold cursor-pointer hover:bg-red-800 "
        onClick={handleSearchMovie}>
          {toggle ? "Home" : "Search Movie"}
        </button>
      </div>
    </div>
  ) : (
    <div className="relative w-8/12 m-auto bg-red-600">
      <div className="absolute left-0 top-0 px-8 py-2 z-10">
        <img className="w-48" src={LOGO} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
