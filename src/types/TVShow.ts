export type TVShow = {
  results: {
    id: number;
    backdrop_path: string | null;
    original_language: string;
    original_name: string;
    first_air_date: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    name: string;
  }[];
  page: number;
  total_pages: number;
  total_results: number;
};

export type NowShowingTVShow = {
  id: number;
  backdropPath: string;
  posterPath: string;
  title: string;
  overview: string;
  firstAirDate: string;
  voteAverage: number;
  originalLanguage: string;
  video: boolean;
  originalName: string;
  name: string;
};

export type NowPlayingMovies = {
  results: NowShowingTVShow[];
  page: number;
  totalPages: number;
  totalResults: number;
};
