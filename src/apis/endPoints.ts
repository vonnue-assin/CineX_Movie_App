export const endPoints = {
  //movies
  getMovieGeneresList: () => `3/genre/movie/list?language=en`,
  getNowPlayingMovies: () => `3/movie/now_playing?language=en-US&page=1`,
  getWatchListMovies: () =>
    `3/account/null/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc`,
  addMoviesToWatchList: (userId: number) => `3/account/${userId}/watchlist`,

  //user
  getUserList: () => `/3/account/null `,
};
