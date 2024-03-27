import axios from "axios";
import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIE_API } from "../src/utils/constant";
import { setUpcomingMovies } from "../src/redux/movieSlice";

const useUpcomingMovie = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(UPCOMING_MOVIE_API, API_OPTIONS);
    dispatch(setUpcomingMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default useUpcomingMovie;
