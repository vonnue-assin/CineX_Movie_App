export type NowPlayingMovieResponse = {
  results: {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    original_title:string
  }[];
  page: number;
  total_pages: number;
  total_results: number;
};

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
