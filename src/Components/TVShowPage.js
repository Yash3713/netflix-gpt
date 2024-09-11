import React from "react";
import Header from "./Header";
import MainContainerTv from "./MainContainer";
import SecContainer from "./SecContainer";
import usePopularTvShow from "../hooks/usePopularTvShow";

const TVShowPage = () => {
  
  return (
    <div>
      <Header />
      <MainContainerTv />
    </div>
  );
};

export default TVShowPage;
