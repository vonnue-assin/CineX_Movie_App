import { AxiosRequestConfig } from 'axios';

import httpClient from './httpClient';

export const endPoints = {
  // Get list of movie genres
  getMovieGeneresList: (config?: AxiosRequestConfig) =>
    httpClient.get('3/genre/movie/list', config),

  // Get list of movies
  getMovieList: (config?: AxiosRequestConfig) =>
    httpClient.get('3/discover/movie', config),

  //Get list of tvshows
  getAllTVList: (config?: AxiosRequestConfig) =>
    httpClient.get('3/discover/tv', config),

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

  //get favourite tvshows lists
  getFavouriteTvShows: (config?: AxiosRequestConfig) =>
    httpClient.get('3/account/null/favorite/tv', config),

  //add and remove movies and tv shows from favourites lists
  toggleFavorites: () => `3/account/null/favorite`,
};
