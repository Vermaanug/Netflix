import axios from "axios";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../src/utils/constant";
import { useEffect } from "react";
import { setTrailerVideo } from "../src/redux/movieSlice";

const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async (movieId) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const trailer = res.data.results.filter(
        (video) => video.name === "Official Trailer"
      );
      dispatch(
        setTrailerVideo(trailer.length > 0 ? trailer[0] : res.data.results[0])
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieVideo(movieId);
  }, []);
};

export default useGetMovieTrailer;
