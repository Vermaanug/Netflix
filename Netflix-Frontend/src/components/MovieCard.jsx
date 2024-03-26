import { POSTER_IMAGE_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie card" className="w-full" src={POSTER_IMAGE_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
