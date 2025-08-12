export const endPoints = {
  //movies

  getMovieGeneresList: () => `3/genre/movie/list?language=en`,
  getNowPlayingMovies: () => `3/movie/now_playing?language=en-US&page=1`,

  //tv

  getAllTVList: () =>
    `3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
  getAllFavoriteTvShows: () =>
    `/3/account/null/favorite/tv?language=en-US&page=1&sort_by=created_at.asc`,
  addTvShowsToFavorites: () => `3/account/null/favorite `,

  //user
  getUserList: () => `/3/account/null `,
  getUserId: (userId: number) => `3/account/22198483/watchlist`,
};
