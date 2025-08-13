type Gravatar = {
  hash: string;
};

type TmdbAvatar = {
  avatar_path: string | null;
};

type Avatar = {
  gravatar: Gravatar;
  tmdb: TmdbAvatar;
};

export type TmdbUserAccount = {
  avatar: Avatar;
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
};
