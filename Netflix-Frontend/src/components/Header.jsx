import React from "react";
import { useSelector, useDispatch } from "react-redux";
import appStore from "../redux/appStore";
import axios from "axios";
import { API_END_POINT, LOGO } from "../utils/constant";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../redux/userSlice";

const Header = () => {
  const currentUser = useSelector((appStore) => appStore.user.currentUser);
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

  return currentUser ? (
    <div className="w-full m-auto bg-gradient-to-b from-black flex justify-around">
      <div className="py-2">
        <img
          className="w-36"
          src={LOGO}
          alt="logo"
        />
      </div>
      <div className="flex justify-between">
        <h1 className="my-5 text-xl">{currentUser.FullName}</h1>
        <button
          className="ml-6 px-2 mt-4 mb-6 bg-red-600 rounded-sm text-white text-sm font-semibold cursor-pointer"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  ) : (
    <div className="relative w-8/12 m-auto bg-red-600">
      <div className="absolute left-0 top-0 px-8 py-2 z-10">
        <img
          className="w-48"
          src={LOGO}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
