export const endPoints = {
  getMovieGeneresList: () => `3/genre/movie/list?language=en`,
  getNowPlayingMovies: () => `3/movie/now_playing?language=en-US&page=1`,
  getFavouriteMovies: (userId: number) => `/3/account/22198483/favorite`,
};
