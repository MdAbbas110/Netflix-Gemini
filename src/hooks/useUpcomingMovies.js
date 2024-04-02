import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcomingList = () => {
  const dispatch = useDispatch();
  const getMovieList = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getMovieList();
  }, []);
};

export default useUpcomingList;
