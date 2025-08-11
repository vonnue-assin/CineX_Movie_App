export const endPoints = {
  getMovieGeneresList: () => `3/genre/movie/list?language=en`,
  getNowPlayingMovies: () => `3/movie/now_playing?language=en-US&page=1`,
  getUserId: (userId: number) => `3/account/22198483/watchlist`,
  getUserList: () => '/3/account/null ',
  isMovieInWatchList: (userId: number, movieId: number) =>
    `/users/${userId}/watchlist/${movieId}`,
};
