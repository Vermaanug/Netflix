import { useDispatch, useSelector } from "react-redux";
import appStore from "../redux/appStore";
import axios from "axios";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { setTrailerVideo } from "../redux/movieSlice";

const VideoBackground = ({ movieId }) => {

  const trailerVideo = useSelector((appStore) =>  appStore.movies.trailerVideo);
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

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture; 
        web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
