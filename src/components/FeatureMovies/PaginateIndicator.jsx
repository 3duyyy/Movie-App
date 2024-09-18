// import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = movies.findIndex((movie) => movie.id === activeMovieId);
      if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % movies.length;
        setActiveMovieId(movies[nextIndex].id);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeMovieId, movies, setActiveMovieId]);

  return (
    <div>
      <div className="absolute bottom-[5%] right-5 sm:right-16">
        <ul className="flex gap-1">
          {movies.map((movie) => (
            <li
              onClick={() => setActiveMovieId(movie.id)}
              key={movie.id}
              className={`h-1 w-4 cursor-pointer sm:w-8 ${movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"}`}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

PaginateIndicator.propTypes = {
  movies: PropTypes.array,
  activeMovieId: PropTypes.any,
  setActiveMovieId: PropTypes.any,
};

export default PaginateIndicator;
