import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black pb-12">
        <div className="md:-mt-64  relative px-3 md:px-10  z-20">
          <MovieList title={'Now Playing'} movies={movies?.nowPlayingMovies} />
          <MovieList title={'Top Rated'} movies={movies?.topRated} />
          <MovieList title={'Popular Movies'} movies={movies?.popularMovies} />
          <MovieList
            title={'Upcoming releases'}
            movies={movies?.upcomingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
