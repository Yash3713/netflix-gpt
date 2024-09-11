import { createSlice } from "@reduxjs/toolkit";

const TvShowSlice = createSlice({
  name: "TvShow",
  initialState: {
    popularShows: null,
  },
  reducers: {
    addPopularShows: (state, action) => {
      state.popularShows = action.payload;
    },
  },
});
export const { addPopularShows } = TvShowSlice.actions;
export default TvShowSlice.reducer;
