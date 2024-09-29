/* eslint-disable react-hooks/exhaustive-deps */
// import React from "react";
import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import useFetch from "@hooks/useFetch";
import { useEffect, useState } from "react";

const FeatureMovies = () => {
  const [activeMovieId, setActiveMovieId] = useState();

  const { data: popularMoviesResponse } = useFetch({
    url: "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  });

  const { data: videoResponse } = useFetch(
    {
      url: `/movie/${activeMovieId}/videos`,
    },
    { enabled: !!activeMovieId },
  );

  console.log({ videoResponse });

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
          .map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              trailerVideoKey={
                (videoResponse?.results || []).find(
                  (video) => video.type === "Trailer" && video.site === "YouTube",
                )?.key
              }
            />
          ))}
      <PaginateIndicator
        activeMovieId={activeMovieId}
        movies={movies}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};

export default FeatureMovies;
