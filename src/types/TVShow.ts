export type TVListAPIResponse = {
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
};

export type APIResponse = {
  page: number;
  results: TVListAPIResponse[];
  total_pages: number;
  total_results: number;
};
