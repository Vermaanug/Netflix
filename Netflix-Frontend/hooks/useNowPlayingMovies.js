import axios from "axios";
import { NOW_PLAYING_API, API_OPTIONS } from "../src/utils/constant";
import { setNowPlayingMovies } from "../src/redux/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(NOW_PLAYING_API, API_OPTIONS);
    dispatch(setNowPlayingMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default useNowPlayingMovies;