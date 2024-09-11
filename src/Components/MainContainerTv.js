import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBG from "./VideoBG";
import { useSelector } from "react-redux";

const MainContainerTv = () => {
  const TvSeries = useSelector((store) => store.TvShow?.popularShows);
  if (TvSeries === null) return;
  const mainSeries = TvSeries.results[0];
  console.log(mainSeries);

  const { name, overview, id } = mainSeries;

  return (
    <div className="">
      <VideoTitle title={name} overview={overview} />
      <VideoBG movieID={id} />
    </div>
  );
};

export default MainContainerTv;
