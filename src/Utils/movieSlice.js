import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    videoTrailer: null,
    popularMovies: null,
    topRated: null,
    upcoming: null,
    actionMovie: null,
    comedyMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcoming = action.payload;
    },
    addVideoTrailer: (state, action) => {
      state.videoTrailer = action.payload;
    },
    addactionMovies: (state, action) => {
      state.actionMovie = action.payload;
    },
    addComedyMovies: (state, action) => {
      state.comedyMovie = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addVideoTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addactionMovies,
  addComedyMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
