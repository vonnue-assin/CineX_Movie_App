export type NowPlayingMovie = {
  id: number;
  backdropPath: string;
  posterPath: string;
  title: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
  originalLanguage: string;
  video: boolean;
  originalTitle: string;
};

export type NowPlayingMovies = {
  results: NowPlayingMovie[];
  page: number;
  totalPages: number;
  totalResults: number;
};

export type Movie = {
  id: number;
  backdropPath: string;
  posterPath: string;
  title: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
  originalLanguage: string;
  video: boolean;
  originalTitle: string;
  genreIds: number[];
};

export type NowPlayingMovieResponse = {
  results: Movie[];
  page: number;
  totalPages: number;
  totalResults: number;
};
