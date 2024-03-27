import axios from "axios";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIE_API } from "../src/utils/constant";
import { settopRatedMovies } from "../src/redux/movieSlice";

const useTopRatedMovie = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(TOP_RATED_MOVIE_API, API_OPTIONS);
    dispatch(settopRatedMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default useTopRatedMovie;
