import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6  text-white">
      <h1 className="text-4xl py-4 font-medium">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-3">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
