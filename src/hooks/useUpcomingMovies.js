import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../redux/moviesSlice';

const useUpcomingList = () => {
  const dispatch = useDispatch();

  const upcomingList = useSelector((store) => store.movies.upcomingMovies);

  const getMovieList = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingList && getMovieList();
  }, []);
};

export default useUpcomingList;
