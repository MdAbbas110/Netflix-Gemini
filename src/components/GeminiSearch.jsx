import GeminiInput from './GeminiInput';
import GeminiSuggestions from './GeminiSuggestions';
import bgImg from '../assets/netflixBg.jpg';

const GeminiSearch = () => {
  return (
    <div>
      <div className=" fixed -z-20">
        <img className=" object-cover" src={bgImg} alt="/" />
      </div>
      <GeminiInput />
      <GeminiSuggestions />
    </div>
  );
};

export default GeminiSearch;
