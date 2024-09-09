import { createSlice } from "@reduxjs/toolkit";

const pageInfo = createSlice({
  name: "page",
  initialState: {
    showHomePage: true,
    showMoviesPage: false,
    showTvShowPage: false,
    showPopularPage: false,
    searchpage: false,
  },
  reducers: {
    setShowHomePage: (state) => {
      state.showMoviesPage = false;
      state.showTvShowPage = false;
      state.showPopularPage = false;
      state.showHomePage = true;
      state.searchpage = false;
    },
    setShowMoviesPage: (state) => {
      state.showMoviesPage = true;
      state.showTvShowPage = false;
      state.showPopularPage = false;
      state.showHomePage = false;
      state.searchpage = false;
    },
    setShowTvShowPage: (state) => {
      state.showMoviesPage = false;
      state.showTvShowPage = true;
      state.showPopularPage = false;
      state.showHomePage = false;
      state.searchpage = false;
    },
    setShowPopularPage: (state) => {
      state.showMoviesPage = false;
      state.showTvShowPage = false;
      state.showPopularPage = true;
      state.showHomePage = false;
      state.searchpage = false;
    },
    showSearchPage: (state) => {
      state.searchpage = !state.searchpage;
      state.showMoviesPage = false;
      state.showTvShowPage = false;
      state.showPopularPage = false;
      state.showHomePage = false;
    },
  },
});
export const {
  setShowMoviesPage,
  setShowPopularPage,
  setShowTvShowPage,
  showSearchPage,
  setShowHomePage,
} = pageInfo.actions;
export default pageInfo.reducer;
