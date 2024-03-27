import axios from "axios";
import { useDispatch } from "react-redux"
import { API_OPTIONS, POPULAR_MOVIE_API } from "../src/utils/constant";
import { setpopularMovie } from "../src/redux/movieSlice";

const usePopularMovie = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(POPULAR_MOVIE_API,API_OPTIONS);
        dispatch(setpopularMovie(res.data.results));
    } catch (error) {
        console.log(error);
    }
}

export default usePopularMovie;