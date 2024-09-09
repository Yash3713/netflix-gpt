import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MoviesPage from "./MoviesPage";
import TVShowPage from "./TVShowPage";
import NewPopular from "./NewPopular";
import SearchPage from "./SearchPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/movies",
      element: <MoviesPage />,
    },
    {
      path: "/browse/TVShows",
      element: <TVShowPage />,
    },
    {
      path: "/browse/New_Popular",
      element: <NewPopular />,
    },
    {
      path: "/browse/search",
      element: <SearchPage />,
    },
  ]);

  return (
    <div className="overflow-x-hidden">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
