import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecContainer from "./SecContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedM from "../hooks/useTopRatedM";
import UseUpcomingM from "../hooks/UseUpcomingM";
import usePopularTvShow from "../hooks/usePopularTvShow";
import useMoviesByGenre from "../hooks/useMoviesByGenre";
import { addactionMovies, addComedyMovies } from "../Utils/movieSlice";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedM();
  UseUpcomingM();
  useMoviesByGenre(28, addactionMovies, "actionMovie"); // Action Movies
  useMoviesByGenre(35, addComedyMovies, "comedyMovie"); // Comedy Movies
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
