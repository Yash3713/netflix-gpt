import React, { useEffect } from "react";
import {
  API_OPTIONS,
  Now_Playing_API,
  Popular_Movie_API,
  Top_Rated_Movie_API,
  Upcoming_movie_API,
} from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addactionMovies } from "../Utils/movieSlice";

const useActionMovies = () => {
  const dispatch = useDispatch();
  const urlstofetch = [
    Now_Playing_API,
    Popular_Movie_API,
    Top_Rated_Movie_API,
    Upcoming_movie_API,
  ];
  const getActionMovies = async (urls) => {
    try {
      const promises = await Promise.all(
        urls.map((url) => fetch(url, API_OPTIONS))
      );
      const responses = await Promise.all(promises);
      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      const actionMovies = data.flatMap((json) =>
        json.results.filter((movie) => movie.genre_ids.includes(28))
      );
      const uniqueActionMovies = Array.from(
        new Map(actionMovies.map((movie) => [movie.id, movie])).values()
      );

      dispatch(addactionMovies(uniqueActionMovies));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };
  useEffect(() => {
    getActionMovies(urlstofetch);
  }, []);
};

export default useActionMovies;
