import ImageComponent from "@components/ImageComponent";
import { useModalContext } from "@context/ModalProvider";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import React from "react";

const Movie = (props) => {
  const { movie, trailerVideoKey } = props;

  const { openPopup } = useModalContext();

  return (
    <div className="relative text-white">
      <ImageComponent
        src={movie.backdrop_path && `https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="aspect-video w-full brightness-50"
        width={900}
        height={500}
      />

      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{movie.title}</p>
        <div>
          <div>
            <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">PG13</p>
            <p className="text-[1.2vw]">{movie.release_date}</p>
          </div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>{movie.overview}</p>
          </div>
          <div className="mt-4">
            <button
              className="mr-3 rounded bg-white px-4 py-2 text-[10px] text-black lg:text-lg"
              onClick={() => {
                {
                  trailerVideoKey
                    ? openPopup(
                        <iframe
                          title="Trailer"
                          src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                          className="aspect-video w-[50vw]"
                        />,
                      )
                    : openPopup(
                        <div className="flex aspect-video w-[50vw] items-center justify-center bg-slate-50">
                          <p className="text-[2vw]">Trailer is not available</p>
                        </div>,
                      );
                }
              }}
            >
              <FontAwesomeIcon icon={faPlay} className="px-1" />
              Trailer
            </button>
            <Link to={`/movie/${movie.id}`}>
              <button className="rounded bg-slate-300/35 px-4 py-2 text-[10px] lg:text-lg">
                View details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.any,
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
  trailerVideoKey: PropTypes.any,
};

export default Movie;
