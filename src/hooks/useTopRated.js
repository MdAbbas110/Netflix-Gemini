import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRated } from '../redux/moviesSlice';

const useTopRated = () => {
  const dispatch = useDispatch();

  const TopRatedList = useSelector((store) => store.movies.topRated);

  const getMovieList = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !TopRatedList && getMovieList();
  }, []);
};

export default useTopRated;
