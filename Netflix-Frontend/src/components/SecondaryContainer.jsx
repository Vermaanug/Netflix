import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import appStore from "../redux/appStore";

const SecondaryContainer = () => {
  const movies = useSelector((appStore) => appStore.movies);

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovie} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
