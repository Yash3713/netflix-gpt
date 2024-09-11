import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import pageInfoReducer from "./pageInfo";
import configReducer from "./configSlice";
import tvshowReducer from "./TvShowSlice"

const appstore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    TvShow: tvshowReducer,
    page: pageInfoReducer,
    config:configReducer,
  },
});
export default appstore;
