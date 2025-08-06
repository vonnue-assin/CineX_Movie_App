export const endPoints = {
  //movie
  getMovieGeneresList: () => `3/genre/movie/list?language=en`,
  getMovieList: () =>
    `3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
};
