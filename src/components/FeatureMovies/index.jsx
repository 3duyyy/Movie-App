// import React from "react";
import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useEffect, useState } from "react";

const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    }).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 4);
      setMovies(popularMovies);
      setActiveMovieId(popularMovies[0].id);
    });
  }, []);

  return (
    <div className="relative">
      {movies &&
        movies
          .filter((movie) => movie.id === activeMovieId)
          .map((movie) => <Movie key={movie.id} movie={movie} />)}
      <PaginateIndicator
        activeMovieId={activeMovieId}
        movies={movies}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};

export default FeatureMovies;
