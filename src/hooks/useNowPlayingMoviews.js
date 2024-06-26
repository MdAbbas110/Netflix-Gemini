import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../redux/moviesSlice';

const useNowPlayingMovies = () => {
  // fetch data from tmdb api and update the store its what this code is doing
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlaying && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
