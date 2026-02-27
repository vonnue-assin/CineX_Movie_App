import httpClient from './httpClient';
import { AxiosRequestConfig } from 'axios';

export const endPoints = {
  //get movies list API
  getMovieGeneresList: (config?: AxiosRequestConfig) =>
    httpClient.get('3/genre/movie/list', config),
  getNowPlayingMovies: (config?: AxiosRequestConfig) =>
    httpClient.get('3/movie/now_playing', config),

  //popular people lists
  getPopularPeopleList: (config?: AxiosRequestConfig) =>
    httpClient.get('3/person/popular', config),

  //get tv shows lists API
  getAllTVList: (config?: AxiosRequestConfig) =>
    httpClient.get('3/discover/tv', config),
};
