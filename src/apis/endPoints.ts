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
};
