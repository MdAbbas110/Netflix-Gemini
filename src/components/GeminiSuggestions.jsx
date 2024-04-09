import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GeminiSuggestions = () => {
  const { recommendedMovies, recommendedMoviesNames } = useSelector(
    (store) => store.gemini
  );
  // console.log(recommendedMoviesNames);
  if (!recommendedMoviesNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-85 rounded-xl">
      <div>
        {recommendedMoviesNames.map((movieName, index) => {
          return (
            <MovieList
              key={movieName}
              title={movieName}
              movies={recommendedMovies[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GeminiSuggestions;
