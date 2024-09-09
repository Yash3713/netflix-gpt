import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, Popular_Movie_API } from "../Utils/constant";
import { addPopularMovies } from "../Utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(Popular_Movie_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
