import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, Popular_TvShow_API } from "../Utils/constant";
import { addPopularShows } from "../Utils/TvShowSlice";

const usePopularTvShow = () => {
  const dispatch = useDispatch();
  const getPopularTvShow = async () => {
    const data = await fetch(Popular_TvShow_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularShows(json));
  };
  useEffect(() => {
    getPopularTvShow();
  }, []);
};

export default usePopularTvShow;
