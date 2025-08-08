import { toast } from 'react-toastify';

import { useGetTVLists } from '../../apis/TV';
import { TVListCard } from '../TVListCard';

import './styles.css';

type TVShow = {
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

export const TVList = () => {
  const { data: tvshows, isLoading, isError } = useGetTVLists();

  if (isLoading) {
    toast.info('Loading TV shows..');
  }

  if (isError) {
    toast.error('Failed to load TV shows. Please try again');
  }

  if (!tvshows || tvshows.length === 0) {
    return <p>No TV shows found.</p>;
  }

  return (
    <>
      <h2 className="tv-lists-title">Enjoy and Explore the TV Shows...</h2>
      <div className="tv-container">
        <div className="tv-list-container">
          {tvshows.map((show: TVShow) => (
            <TVListCard key={show.id} {...show} />
          ))}
        </div>
      </div>
    </>
  );
};
