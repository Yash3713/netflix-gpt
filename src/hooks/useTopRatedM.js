import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, Top_Rated_Movie_API } from '../Utils/constant';
import {  addTopRatedMovies } from '../Utils/movieSlice';

const useTopRatedM = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(Top_Rated_Movie_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
}

export default useTopRatedM