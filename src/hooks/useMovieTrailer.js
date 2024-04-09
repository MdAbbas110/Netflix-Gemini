import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer } from '../redux/moviesSlice';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVid = useSelector((store) => store.movies.trailerVide);

  const getMovieVideos = async () => {
    const data = await fetch(
      `
     https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const response = await data.json();
    const filterData = response.results.filter(
      (video) => video.type === 'Trailer'
    );

    //handling the empty filter list
    const trailer = filterData.length > 0 ? filterData[0] : response.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    !trailerVid && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
