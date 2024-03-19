import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import appStore from "../redux/appStore";
import { useNavigate } from "react-router-dom";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";

const Browse = () => {
  const currentUser = useSelector((appStore) => appStore.user.currentUser);
  const navigate = useNavigate();

  useNowPlayingMovies();  //  Custom Hooks to fetching data from API and store it in Redux Store

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, []);

  return <Header />;
};

export default Browse;
