export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjBhY2Y2ODY5YzMyZWVjM2RlMjIyNzNlZWFhYmU3MSIsIm5iZiI6MTcyNTM1NDY5Ny45ODQ3NzQsInN1YiI6IjYwZmJlNWRlZTI0YjkzMDA1ZjlmYWIxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.STGUFZTy3JXa1mM5UcLmgR9jCMHEW5_fF2faT2rb5xs",
  },
};

export const Now_Playing_API =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const Popular_Movie_API =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const Top_Rated_Movie_API =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const Upcoming_movie_API =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const Video_API =
  "https://api.themoviedb.org/3/movie/533535/videos?language=en-US";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const Supported_Languages = [
  { identifier: "en", language: "English" },
  { identifier: "hindi", language: "Hindi" },
  { identifier: "spanish", language: "Spanish" },
];
