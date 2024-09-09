import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import pageInfoReducer from "./pageInfo";
import configReducer from "./configSlice";

const appstore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    page: pageInfoReducer,
    config:configReducer,
  },
});
export default appstore;
