import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import appStore from "../redux/appStore";
import { useNavigate } from "react-router-dom";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../../hooks/usePopularMovie";
import useTopRatedMovie from "../../hooks/useTopRatedMovie";
import useUpcomingMovie from "../../hooks/useUpcomingMovie";

const Browse = () => {
  const currentUser = useSelector((appStore) => appStore.user.currentUser);
  const navigate = useNavigate();

  useNowPlayingMovies();  //  Custom Hooks to fetching data from API and store it in Redux Store
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
};

export default Browse;
