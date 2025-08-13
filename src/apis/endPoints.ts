export const endPoints = {
  //movies
  getMovieGeneresList: () => `3/genre/movie/list?language=en`,
  getNowPlayingMovies: () => `3/movie/now_playing?language=en-US&page=1`,

  //tv
  getAllTVList: () =>
    `3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
  getWatchListTvShows: () =>
    `3/account/null/watchlist/tv?language=en-US&page=1&sort_by=created_at.asc`,
  addTvShowsToWatchLists: (userId: number) => `3/account/${userId}/watchlist`,
  //user
  getUserList: () => `/3/account/null `,
};
