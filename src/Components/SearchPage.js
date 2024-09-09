import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import GptSuggestion from "./GptSuggestions";

const SearchPage = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 opacity-90">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt="bg"
          className="object-cover"
        />
      </div>
      <Header />
      <SearchBar />
      <GptSuggestion />
    </div>
  );
};

export default SearchPage;
