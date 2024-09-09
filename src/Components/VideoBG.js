import React from "react";

import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBG = ({ movieID }) => {
  const videoTrailer = useSelector((store) => store.movie?.videoTrailer);
  useMovieTrailer(movieID);
  return (
    videoTrailer && (
      <div className="overflow-x-hidden">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${videoTrailer?.key}?autoplay=1&mute=1&loop=1&playlist=${videoTrailer?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    )
  );
};

export default VideoBG;
