import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ poster_path, name }) => {
  return (
    <div className="w-36 md:w-48">
      <img src={IMG_CDN_URL + poster_path} alt="image" />
      <p className="text-lg font-medium text-[#FFD700] text-center">{name}</p>
    </div>
  );
};

export default MovieCard;
