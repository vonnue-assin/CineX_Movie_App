export type TVListAPIResponse = {
  [x: string]: any;
  length: number;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_name:string;
  first_air_date:string
  overview: string;
  popularity: number;
  poster_path: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TVAPIResponse = {
  page: number;
  results: TVListAPIResponse[];
  total_pages: number;
  total_results: number;
};
