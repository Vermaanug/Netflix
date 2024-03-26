import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="absolute bg-black">
      <h1 className="text-3xl font-semibold text-white pl-14 pb-4">{title}</h1>
      <div className="flex pl-10 overflow-hidden">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
