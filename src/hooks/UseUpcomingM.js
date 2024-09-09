import React, { useEffect } from "react";
import { API_OPTIONS, Upcoming_movie_API } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../Utils/movieSlice";

const UseUpcomingM = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(Upcoming_movie_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default UseUpcomingM;
