import { useRef, useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);
  const [scrollStartX, setScrollStartX] = useState(null);

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      // Check if left mouse button is pressed
      setScrollStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setScrollStartX(null);
  };

  const handleMouseMove = (e) => {
    if (e.button === 0) {
      // Check if left mouse button is pressed
      const container = scrollContainerRef.current;
      if (container) {
        const mouseX = e.clientX;
        const scrollLeft = container.scrollLeft;
        const offsetLeft = container.offsetLeft;
        const newScrollLeft = mouseX - offsetLeft + scrollLeft;
        container.scroll({
          left: newScrollLeft,
          behavior: 'smooth', // Optionally add smooth scrolling behavior
        });
      }
    }
  };

  return (
    <div className="px-6  text-white">
      <h1 className="md:text-4xl text-xl py-4 font-medium">{title}</h1>
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex scrollBar overflow-x-scroll"
      >
        <div className="flex  gap-3">
          {movies?.map(
            (movie) =>
              movie.poster_path && (
                <MovieCard
                  key={movie.id}
                  poster_path={movie?.poster_path}
                  name={movie?.title || movie.name}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
