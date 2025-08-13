export type TVShow = {
  results: any;
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
};

export type TvShowsWatchLists = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  first_air_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: string;
  isWatchList: boolean;
};
