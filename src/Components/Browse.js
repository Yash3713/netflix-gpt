import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecContainer from "./SecContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedM from "../hooks/useTopRatedM";
import UseUpcomingM from "../hooks/UseUpcomingM";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedM();
  UseUpcomingM();
  return (
    <div className="overflow-x-hidden">
      <Header />
      <MainContainer />
      <SecContainer />
    </div>
  );
};

export default Browse;
