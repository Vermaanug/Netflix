import { POSTER_IMAGE_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if(posterPath === null) return null ;
  return (
    <div className="w-48 pr-2">
      <img alt="Movie card" src={POSTER_IMAGE_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
