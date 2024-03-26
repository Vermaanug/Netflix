import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-6">
      <h1 className="text-3xl text-white mb-4 pl-2">{title}</h1>
      <div className=" flex overflow-x-scroll no-scrollbar cursor-pointer p-1">
        <div className="flex items-center pb-4">
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

export default MovieList;
