import React, { useEffect } from "react";
import {
  API_OPTIONS,
  Now_Playing_API,
  Popular_Movie_API,
  Top_Rated_Movie_API,
  Upcoming_movie_API,
} from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addComedyMovies } from "../Utils/movieSlice";

const useComedyMovies = () => {
  const dispatch = useDispatch();
  const urlstofetch = [
    Now_Playing_API,
    Popular_Movie_API,
    Top_Rated_Movie_API,
    Upcoming_movie_API,
  ];
  const getComedyMovies = async (urls) => {
    try {
      const promises = await Promise.all(
        urls.map((url) => fetch(url, API_OPTIONS))
      );
      const responses = await Promise.all(promises);
      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      const comedyMovies = data.flatMap((json) =>
        json.results.filter((movie) => movie.genre_ids.includes(35))
      );
      const uniqueComedyMovies = Array.from(
        new Map(comedyMovies.map((movie) => [movie.id, movie])).values()
      );

      dispatch(addComedyMovies(uniqueComedyMovies));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };
  useEffect(() => {
    getComedyMovies(urlstofetch);
  }, []);
};

export default useComedyMovies;
