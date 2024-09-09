import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //console.log(movies);
  return (
    movies && (
      <div className="py-6 px-10">
        <h1 className="text-white text-2xl font-semibold mb-4">{title}</h1>
        <div className="overflow-x-scroll no-scrollbar ">
          <div className="flex space-x-3">
            {movies?.map((movie) => (
              <MovieCard
                key={movie?.id}
                posterPath={movie?.poster_path}
                movies={movie?.id}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
