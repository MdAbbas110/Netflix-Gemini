import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../redux/moviesSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularList = useSelector((store) => store.movies.popularMovies);

  const popularMovie = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularList && popularMovie();
  }, []);
};

export default usePopularMovies;
