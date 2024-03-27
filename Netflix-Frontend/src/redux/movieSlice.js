import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovie: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    setpopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    settopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setUpcomingMovies:(state,action)=> {
        state.upcomingMovies=action.payload
    }
  },
});

export const { setNowPlayingMovies, setTrailerVideo, setpopularMovie , settopRatedMovies , setUpcomingMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;
