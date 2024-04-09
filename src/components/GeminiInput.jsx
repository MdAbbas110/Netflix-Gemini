import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import { useRef } from 'react';
import genAI from '../Gemini_API/openAi';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { showRecommendedMovies } from '../redux/geminiSlice';

const GeminiInput = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGeminiSearch = async (e) => {
    e.preventDefault();
    // make a call to gemini api and get the movies results
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `act as a movie recommendation system and suggest some movies for this query, ${searchText.current.value}. Only give me 5 movies, comma separated, for example: Terminator, Anaconda, Gods father, Don, Friend`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    if (!text) {
      // do error handling
    }
    const moviesArray = text.split(',');
    const promiseArray = moviesArray.map((movie) => searchMoviesTMDB(movie));
    // this promiseArray will return the array of promise and we need to get the results ot of all the promise

    const TMDBSearch = await Promise.all(promiseArray);
    dispatch(
      showRecommendedMovies({
        movieNames: moviesArray,
        movieResults: TMDBSearch,
      })
    );
  };

  return (
    <div className="pt-[10%]  mx-auto flex justify-center">
      <form className="bg-black grid w-1/2 grid-cols-4">
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-3 rounded-xl"
          placeholder={lang[language].placeholder}
        />

        <button
          onClick={handleGeminiSearch}
          className="py-2 px-3 m-4 text-white text-xl font-medium bg-red-800 rounded-xl"
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GeminiInput;
