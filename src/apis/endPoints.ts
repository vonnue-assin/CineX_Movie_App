import { AxiosRequestConfig } from 'axios';

import httpClient from './httpClient';

export const endPoints = {
  // Get list of movie genres
  getMovieGeneresList: (config?: AxiosRequestConfig) =>
    httpClient.get('3/genre/movie/list', config),

  // Get list of movies
  getMovieList: (config?: AxiosRequestConfig) =>
    httpClient.get('3/discover/movie', config),

  // Get now playing movies
  getNowPlayingMovies: (config?: AxiosRequestConfig) =>
    httpClient.get('3/movie/now_playing', config),

  // Get popular people list
  getPopularPeopleList: (config?: AxiosRequestConfig) =>
    httpClient.get('3/person/popular', config),
  getUserList: () => `/3/account/null `,
  getUserId: (userId: number) => `3/account/${userId}/watchlist`,

  //get favourite movies lists
  getFavouriteMovies: (config?: AxiosRequestConfig) =>
    httpClient.get('3/account/null/favorite/movies', config),

  //add and remove movies from favourites lists
  toggleFavoriteMovies: () => `3/account/null/favorite`,

  //get watchlists movies lists
  getWatchListsMovies: (config?: AxiosRequestConfig) =>
    httpClient.get('3/account/null/watchlist/movies', config),

  toggleWatchListMovies: () => '3/account/null/watchlist',
};
