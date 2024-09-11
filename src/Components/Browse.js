import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecContainer from "./SecContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedM from "../hooks/useTopRatedM";
import UseUpcomingM from "../hooks/UseUpcomingM";
import useActionMovies from "../hooks/useActionMovies";
import useComedyMovies from "../hooks/useComedyMovies";
import usePopularTvShow from "../hooks/usePopularTvShow";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedM();
  UseUpcomingM();
  useActionMovies();
  useComedyMovies();
  usePopularTvShow();
  return (
    <div className="overscroll-x-none">
      <Header />
      <MainContainer />
      <SecContainer />
    </div>
  );
};

export default Browse;
