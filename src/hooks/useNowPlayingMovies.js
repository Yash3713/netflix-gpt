import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  API_OPTIONS, Now_Playing_API } from "../Utils/constant";
import { addNowPlayingMovies } from "../Utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(Now_Playing_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
