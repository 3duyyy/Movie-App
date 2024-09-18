/* eslint-disable react-hooks/exhaustive-deps */
// import React from "react";
import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import useFetch from "@hooks/useFetch";
import { useEffect, useState } from "react";

const FeatureMovies = () => {
  const [activeMovieId, setActiveMovieId] = useState();

  const { data: popularMoviesResponse } = useFetch({
    url: "/movie/popular",
  });

  const movies = ((popularMoviesResponse && popularMoviesResponse.results) || []).slice(0, 4);

  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0].id);
    }
  }, [JSON.stringify(movies)]);

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
