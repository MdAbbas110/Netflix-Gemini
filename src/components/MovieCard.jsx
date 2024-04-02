import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-48">
      <img src={IMG_CDN_URL + poster_path} alt="image" />
    </div>
  );
};

export default MovieCard;
