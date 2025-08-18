import React from 'react';
import { toast } from 'react-toastify';

import { useToggleTVShows } from '../../apis/TV';
import { useGetUserDetails } from '../../apis/user';
import { POSTER_BASE_URL } from '../../constants/posterLink';
import { StarRating } from '../StarRating';

import VideoIcon from '../../assets/images/video.png';
import { ReactComponent as WatchListIcon } from '../../assets/svg/watchLists.svg';

import './styles.css';

type TVListsCardProps = {
  id: number;
  backdropPath: string;
  posterPath: string;
  title: string;
  overview: string;
  firstAirDate: string;
  voteAverage: number;
  originalLanguage: string;
  video: boolean;
  isWatchList?: boolean;
  originalName: string;
};

export const TVListCard: React.FC<TVListsCardProps> = ({
  backdropPath,
  originalLanguage,
  originalName,
  posterPath,
  firstAirDate,
  title,
  video,
  voteAverage,
  overview,
  id,
  isWatchList = false,
}) => {
  const { mutate: toggleWatchLists } = useToggleTVShows();

  const { data: userDetails } = useGetUserDetails();

  const handleWatchListsClick = () => {
    if (!userDetails || userDetails.length === 0) {
      toast.error('User details not available to manage watchLists.');
      return;
    }

    const userId = userDetails[0].id;

    toggleWatchLists(
      {
        userId,
        id,
        isWatchlist: !isWatchList,
      },
      {
        onSuccess: () => {
          toast.success(
            !isWatchList
              ? 'Successfully added to the watch lists!'
              : 'Successfully removed from the watch lists!',
          );
        },
        onError: error =>
          toast.error(
            `Error ${!isWatchList ? 'adding' : 'removing'} from watchlists: ${
              error.message
            }`,
          ),
      },
    );
  };

  return (
    <div className="tv-details-container">
      <div className="tvshow-images-scroller">
        {posterPath && (
          <div className="tvshow-image-card">
            <div className="flip-wrapper">
              <div className="flip-inner">
                <div className="flip-front">
                  <img
                    className="tvshow-image"
                    src={`${POSTER_BASE_URL}${posterPath}`}
                    alt={`${title} poster`}
                  />
                </div>
                <div className="flip-back">
                  <p className="movie-overview">{overview}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {backdropPath && (
          <div className="tvshow-image-card">
            <img
              className="tvshow-image-backdrop"
              src={`${POSTER_BASE_URL}${backdropPath}`}
              alt={`${title} backdrop`}
            />
          </div>
        )}
      </div>
      <div className="tvshowList-details-card">
        <WatchListIcon
          width={'30px'}
          height={'30px'}
          className={`watchlist_icon ${isWatchList ? 'watchlisted' : ''}`}
          onClick={handleWatchListsClick}
        />

        <StarRating rating={voteAverage} />

        <h2 className="original-tvshow-title">{originalName}</h2>
        <p>Original Language: {originalLanguage.toLocaleUpperCase()}</p>
        <p>First Air Date: {firstAirDate}</p>

        {video && (
          <p className="videoIcon">
            <VideoIcon /> Video Available
          </p>
        )}
      </div>
    </div>
  );
};
