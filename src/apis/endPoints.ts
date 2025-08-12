import { GetFavouriteMovies } from './movie';

export const endPoints = {
  getMovieGeneresList: () => `3/genre/movie/list?language=en`,
  getMovieList: () =>
    `3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  getNowPlayingMovies: () => `3/movie/now_playing?language=en-US&page=1`,
  GetFavouriteMovies: () =>
    `3/account/null/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
  getUserList: () => `/3/account/null `,
  getUserId: (userId: number) => `3/account/22198483/watchlist`,
};
