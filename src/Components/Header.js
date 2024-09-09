import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { IoIosSearch } from "react-icons/io";
import {
  setShowHomePage,
  setShowMoviesPage,
  setShowPopularPage,
  setShowTvShowPage,
  showSearchPage,
} from "../Utils/pageInfo";
import { Supported_Languages } from "../Utils/constant";
import { changelanguage } from "../Utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isMoviesPageVisible = useSelector((state) => state.page.showMoviesPage);
  const isHomePageVisible = useSelector((state) => state.page.showHomePage);
  const isTvShowPageVisible = useSelector((state) => state.page.showTvShowPage);
  const isSearchPageVisible = useSelector((state) => state.page.searchpage);

  const isPopularPageVisible = useSelector(
    (state) => state.page.showPopularPage
  );
  const location = useLocation();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        if (location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when Header Unmounts
    return () => unsubscribe();
  }, []);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successfull
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleMoviesPage = () => {
    navigate("/browse/movies");
    dispatch(setShowMoviesPage());
  };
  const handleTvShowPage = () => {
    navigate("/browse/TVShows");
    dispatch(setShowTvShowPage());
  };
  const handlePopularPage = () => {
    navigate("/browse/New_Popular");
    dispatch(setShowPopularPage());
  };
  const handleHomePage = () => {
    navigate("/browse");
    dispatch(setShowHomePage());
  };
  const handleSearchPage = () => {
    navigate("/browse/search");
    dispatch(showSearchPage());
  };
  const handleLangChange = (e) => {
    dispatch(changelanguage(e.target.value));
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between overflow-x-hidden">
      <img
        onClick={handleHomePage}
        className="w-44 cursor-pointer"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png "
        alt="logo"
      />

      {user && (
        <div className="flex items-center space-x-3 -ml-80">
          <span
            onClick={handleHomePage}
            className={`text-white font-semibold px-2 cursor-pointer transform hover:scale-105 transition-transform duration-300 ${
              isHomePageVisible ? "font-bold text-lg" : ""
            }`}
          >
            Home
          </span>

          <span
            onClick={handleMoviesPage}
            className={`text-white font-semibold px-2 cursor-pointer transform hover:scale-105 transition-transform duration-300 ${
              isMoviesPageVisible ? "font-bold text-lg" : ""
            }`}
          >
            Movies
          </span>
          <span
            onClick={handleTvShowPage}
            className={`text-white font-semibold px-2 cursor-pointer transform hover:scale-105 transition-transform duration-300 ${
              isTvShowPageVisible ? "font-bold text-lg" : ""
            }`}
          >
            TV Shows
          </span>
          <span
            onClick={handlePopularPage}
            className={`text-white font-semibold px-2 cursor-pointer transform hover:scale-105 transition-transform duration-300 ${
              isPopularPageVisible ? "font-bold text-lg" : ""
            }`}
          >
            New & Popular{" "}
          </span>
        </div>
      )}
      {user && (
        <div className="flex p-3">
          {isSearchPageVisible && (
            <div className="flex items-center mx-2">
              <select
                onChange={handleLangChange}
                className=" bg-gray-900 rounded-md text-white p-2 cursor-pointer"
              >
                {Supported_Languages.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.language}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="flex items-center mx-3 px-2">
            <IoIosSearch
              onClick={handleSearchPage}
              className={`invert h-8 w-7 cursor-pointer ${
                isSearchPageVisible ? "invisible" : ""
              }`}
            />
          </div>
          <img
            className="w-12 h-12"
            src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            alt="profile"
          ></img>
          <button
            className="p-2 text-white font-semibold"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
