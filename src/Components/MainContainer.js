import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBG from "./VideoBG";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies.results[0];
  console.log(movies);

  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBG movieID={id} />
    </div>
  );
};

export default MainContainer;
