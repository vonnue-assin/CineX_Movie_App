export type TopRatedMovieAPIResponse = {
  results: {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
  }[];
  page: number;
  total_pages: number;
  total_results: number;
};

export type TopRatedMovie = {
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

export type TopRatedMovieResponse = {
  results: TopRatedMovie[];
  page: number;
  totalPages: number;
  totalResults: number;
};
