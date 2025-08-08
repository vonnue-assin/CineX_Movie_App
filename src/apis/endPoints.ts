export const endPoints = {
  getMovieGeneresList: () => `3/genre/movie/list?language=en`,
  getNowPlayingMovies: () => `3/movie/now_playing?language=en-US&page=1`,
  getAllTVList: () =>
    `3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
};
