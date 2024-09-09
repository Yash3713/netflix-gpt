import React from "react";
import { IMG_CDN_URL } from "../Utils/constant";

const MovieCard = ({ posterPath, movies }) => {
  return (
    <div className="min-w-[150px] cursor-pointer transform hover:scale-105 transition-transform duration-300">
      <img
        src={IMG_CDN_URL + posterPath}
        alt={movies.id}
        className="rounded-md object-cover"
      />
    </div>
  );
};

export default MovieCard;
