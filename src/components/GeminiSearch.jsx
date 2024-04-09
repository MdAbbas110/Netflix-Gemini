import GeminiInput from './GeminiInput';
import GeminiSuggestions from './GeminiSuggestions';
import bgImg from '../assets/netflixBg.jpg';

const GeminiSearch = () => {
  return (
    <div>
      <div className=" fixed h-screen -z-20">
        <img className="h-[120%] object-cover" src={bgImg} alt="/" />
      </div>
      <GeminiInput />
      <GeminiSuggestions />
    </div>
  );
};

export default GeminiSearch;
