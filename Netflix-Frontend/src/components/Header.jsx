import React from "react";
import { useSelector } from "react-redux";
import appStore from "../redux/appStore";

const Header = () => {
  const currentUser = useSelector((appStore) => appStore.user.currentUser);

  return currentUser ? (
    <div className="w-full m-auto bg-gradient-to-b from-black flex justify-around">
      <div className="py-2">
        <img
          className="w-36"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <div className="flex justify-between">
        <h1 className="my-5 text-xl">{currentUser.FullName}</h1>
        <button className="ml-6 px-2 mt-4 mb-6 bg-red-600 rounded-sm text-white text-sm font-semibold cursor-pointer">Sign Out</button>
      </div>
    </div>
  ) : (
    <div className="relative w-8/12 m-auto bg-red-600">
      <div className="absolute left-0 top-0 px-8 py-2 z-10">
        <img
          className="w-48"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
