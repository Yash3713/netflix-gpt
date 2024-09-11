import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecContainer = () => {
  const movies = useSelector((store) => store.movie);
  const TvShows = useSelector((store) => store.TvShow);
  return (
    movies &&  (
      <div className="bg-black">
        <div className="relative z-20 -mt-50">
          <MovieList
            title={"Now Playing"}
            movies={movies?.nowPlayingMovies?.results}
          />
          <MovieList
            title={"Popular Movies"}
            movies={movies?.popularMovies?.results}
          />
          <MovieList title={"Top rated"} movies={movies?.topRated?.results} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies?.upcoming?.results}
          />
          <MovieList title={"Action Movies"} movies={movies?.actionMovie} />
          <MovieList title={"Comedy Movies"} movies={movies?.comedyMovie} />
        </div>
      </div>
    )
  );
};

export default SecContainer;
