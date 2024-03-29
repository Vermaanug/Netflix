import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_OPTIONS, SEARCH_MOVIE_API } from "../utils/constant";
import MovieList from "./MovieList";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovie } from "../redux/movieSlice";
import appStore from "../redux/appStore";
import MovieCard from "./MovieCard";
import { setIsLoading } from "../redux/userSlice";

const SearchMovie = () => {
  const [Search, setSearch] = useState("");
  const dispatch = useDispatch();

  const movies = useSelector((appStore) => appStore.movies.searchMovie);
  
  useEffect(() => {
    
    return () => {
      dispatch(setSearchMovie(null));
    };
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    try {
      const res = await axios.get(`${SEARCH_MOVIE_API}${Search}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
      dispatch(setSearchMovie(res.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-[8%] bg-gradient-to-b from-[#181d24] h-screen">
      <div className="flex justify-center">
        <form className="h-28" onSubmit={handleSubmit}>
          <input
            type="text"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Movie..."
            className="w-96 p-2 mr-2 bg-black text-white rounded-lg focus:outline-none"
          />
          <button className="py-2 px-4 bg-red-600 rounded-sm text-white text-sm font-semibold cursor-pointer">
            Search
          </button>
        </form>
      </div>
      <div className="m-auto w-[80%]">
        <div className="p-4 flex flex-wrap justify-center h-screen w-full object-cover">
          {movies &&
            movies.map((movie) => {
              return (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
