export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjBhY2Y2ODY5YzMyZWVjM2RlMjIyNzNlZWFhYmU3MSIsIm5iZiI6MTcyNTM1NDY5Ny45ODQ3NzQsInN1YiI6IjYwZmJlNWRlZTI0YjkzMDA1ZjlmYWIxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.STGUFZTy3JXa1mM5UcLmgR9jCMHEW5_fF2faT2rb5xs",
  },
};

export const API =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const Video_API =
  "https://api.themoviedb.org/3/movie/533535/videos?language=en-US";
