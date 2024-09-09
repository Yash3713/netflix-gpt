import React from "react";
import { useSelector } from "react-redux";
import lang from "../Utils/LangConstants";

const SearchBar = () => {
  const langValue = useSelector((store) => store.config.lang);
  return (
    <div className="flex pt-[10%] justify-center">
      {" "}
      <form className="w-1/2 bg-black grid grid-cols-12 p-4 rounded-lg shadow-lg">
        {" "}
        <input
          type="text"
          className="p-4 m-2 col-span-9 rounded-md"
          placeholder={lang[langValue].searchPlaceholder}
        />
        <button className="py-2 px-4 m-2 col-span-3 bg-red-700 text-white rounded-lg hover:bg-red-700 transition duration-200">
          {lang[langValue].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
