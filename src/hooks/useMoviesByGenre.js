import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";

const useMoviesByGenre = (genreId, action, categoryKey) => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movie[categoryKey]);

  const getMoviesByGenre = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`;
    
    try {
      const data = await fetch(url, API_OPTIONS);
      const json = await data.json();
      dispatch(action(json.results));
    } catch (error) {
      console.error("Error fetching movies by genre:", error);
    }
  };

  useEffect(() => {
    if (!movies) {
      getMoviesByGenre();
    }
  }, [movies]); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useMoviesByGenre;
