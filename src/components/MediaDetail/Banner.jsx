// import React from 'react'
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ImageComponent from "@components/ImageComponent";
import CircularProgressBar from "@components/CircularProgressBar";
import { useModalContext } from "@context/ModalProvider";
import { groupBy } from "lodash";

const Banner = ({
  title,
  backdropPath,
  posterPath,
  certification,
  crews,
  releaseDate,
  genres,
  point = 0,
  overview,
  trailerVideoKeys,
}) => {
  const { setIsShowing, setContent } = useModalContext();

  if (!title) return null;
  const groupedCrews = groupBy(crews, "job");

  return (
    <div className="relative overflow-hidden bg-black text-white shadow-sm shadow-slate-800">
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original${backdropPath}`}
        className="absolute inset-0 aspect-video w-full brightness-[.2]"
        width={1200}
        height={800}
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <ImageComponent
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${posterPath}`}
            className="w-full"
            width={600}
            height={900}
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[1.8vw] font-bold">{title}</p>
          <div className="flex items-center gap-8">
            <span className="border border-gray-400 p-1 text-gray-400">{certification}</span>
            <p>{releaseDate}</p>
            <p>{(genres || []).map((genre) => genre.name).join(",")}</p>
          </div>
          <div className="mt-4 flex items-center gap-12">
            <div className="flex items-center gap-2">
              <CircularProgressBar percent={Math.round(point * 10)} size={3} strokeWidth={0.3} />
              Rating
            </div>
            <button
              onClick={() => {
                setIsShowing(true);
                {
                  trailerVideoKeys
                    ? setContent(
                        <iframe
                          title="Trailer"
                          src={`https://www.youtube.com/embed/${trailerVideoKeys}`}
                          className="aspect-video w-[50vw]"
                        />,
                      )
                    : setContent(
                        <div className="flex aspect-video w-[50vw] items-center justify-center bg-slate-50">
                          <p className="text-[2vw]">Trailer is not available</p>
                        </div>,
                      );
                }
              }}
            >
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:gap-8">
            {Object.keys(groupedCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p>{groupedCrews[job].map((crew) => crew.name).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.any,
  backdropPath: PropTypes.any,
  posterPath: PropTypes.any,
  certification: PropTypes.any,
  crews: PropTypes.any,
  releaseDate: PropTypes.any,
  genres: PropTypes.any,
  point: PropTypes.any,
  overview: PropTypes.any,
  trailerVideoKeys: PropTypes.any,
};

export default Banner;
