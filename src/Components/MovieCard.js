import React from "react";
import { IMG_CDN_URL } from "../Utils/constant";

const MovieCard = ({ posterPath, movies }) => {
  if (!posterPath) return null;
  return (
    <div className="min-w-[150px] cursor-pointer transform hover:scale-105 transition-transform duration-300">
      <img
        src={IMG_CDN_URL + posterPath}
        alt={movies.title || "Movie Poster"}
        className="rounded-md object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default React.memo(MovieCard);
