export const endPoints = {
  getMovieGeneresList: () => `3/genre/movie/list?language=en`,
  getMovieList: () =>
    `3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  getNowPlayingMovies: () => `3/movie/now_playing?language=en-US&page=1`,
  getPopularPeopleList: () => `3/person/popular?language=en-US&page=1`,
};
