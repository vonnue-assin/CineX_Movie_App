export const endPoints = {
  getMovieGeneresList: () => `3/genre/movie/list?language=en`,
  getNowPlayingMovies: () =>
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
  getMovieList: () =>
    `3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
};
