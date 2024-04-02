import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRated } from '../utils/moviesSlice';

const useTopRated = () => {
  const dispatch = useDispatch();
  const getMovieList = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    getMovieList();
  }, []);
};

export default useTopRated;
