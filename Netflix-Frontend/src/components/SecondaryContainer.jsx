import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import appStore from "../redux/appStore";

const SecondaryContainer = () => {
  const movies = useSelector((appStore) => appStore.movies.nowPlayingMovies);
  console.log(movies);

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Now Playing"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
