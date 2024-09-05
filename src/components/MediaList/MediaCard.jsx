// import React from 'react'
import PropTypes from "prop-types";
import CircularProgressBar from "../CircularProgressBar";

const MediaCard = ({ title, release_date, poster, point, mediaType }) => {
  return (
    <div className="relative cursor-pointer rounded-lg border border-slate-800">
      {mediaType === "tv" && (
        <p className="absolute right-1 top-1 rounded bg-black p-1 text-sm font-bold shadow-md">
          TV Show
        </p>
      )}
      <img
        className="w-full rounded-lg object-cover"
        src={`https://media.themoviedb.org/t/p/w500/${poster}`}
        alt=""
      />
      <div className="relative top-[-1.5vw] px-4">
        <CircularProgressBar percent={point} />
        <p className="mt-2 font-bold">{title}</p>
        <p className="text-slate-300">{release_date}</p>
      </div>
    </div>
  );
};

MediaCard.propTypes = {
  title: PropTypes.any,
  release_date: PropTypes.any,
  poster: PropTypes.any,
  point: PropTypes.any,
  mediaType: PropTypes.any,
};

export default MediaCard;
