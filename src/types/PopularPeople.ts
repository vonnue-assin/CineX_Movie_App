import { JSX } from "react/jsx-runtime";

export type KnownForMovie = {
  adult: boolean;
  backdropPath: string | null;
  id: number;
  title?: string;
  originalTitle?: string;
  overview: string;
  posterPath: string | null;
  mediaType: string;
  originalLanguage: string;
  genreIds: number[];
  popularity: number;
  releaseDate?: string;
  firstAirDate?: string;
  video?: boolean;
  voteAverage: number;
  voteCount: number;
};

export type KnownForMovieAPIResponse = {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title?: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  media_type: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
};

export type PopularPeopleAPIResponse = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  known_for: KnownForMovieAPIResponse[];
};

export type PopularPeople = {
  adult: boolean;
  gender: number;
  id: number;
  knownForDepartment: string;
  name: string;
  originalName: string;
  popularity: number;
  profilePath: string | null;
  knownFor: KnownForMovie[];
};

export type APIResponse = {
  map(arg0: (person: { id: any; adult?: boolean; gender?: number; knownForDepartment?: string; name?: string; originalName?: string; popularity?: number; profilePath?: string | null; knownFor?: KnownForMovie[]; }) => JSX.Element): import("react").ReactNode;
  page: number;
  results: PopularPeople[];
};

export type RawAPIResponse = {
  page: number;
  results: PopularPeopleAPIResponse[];
};
