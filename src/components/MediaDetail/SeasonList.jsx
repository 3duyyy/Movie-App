// import React from 'react'
import PropTypes from "prop-types";
import CircularProgressBar from "@components/CircularProgressBar";
import ImageComponent from "@components/ImageComponent";
import { useState } from "react";

const SeasonList = ({ seasons = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentSeasonList = isShowMore ? seasons : seasons.slice(0, 3);

  return (
    <div className="mt-8 text-[1.2vw]">
      <p className="mb-4 text-[1.6vw] font-bold">Seasons</p>
      <div className="space-y-4">
        {currentSeasonList.map((season) => (
          <div
            key={season.id}
            className="flex items-center gap-6 rounded-lg border border-slate-200 p-3 shadow-md"
          >
            <ImageComponent
              src={`https://media.themoviedb.org/t/p/w300${season.poster_path}`}
              width={130}
              height={195}
              className="w-1/4 rounded-lg"
            />
            <div className="space-y-1">
              <p className="text-[1.4vw] font-bold">{season.name}</p>
              <div className="flex items-center gap-4">
                <p className="font-bold">Rating</p>
                <CircularProgressBar percent={Math.round(season.vote_average) * 10} />
              </div>
              <p>
                <span className="font-bold">Release Date:</span> {season.air_date}
              </p>
              <p>{season.episode_count} Episodes</p>
              <p className="text-[1.1vw]">{season.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <p
        className="mt-2 cursor-pointer text-[1.3vw] text-slate-400"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show less" : "Show more"}
      </p>
    </div>
  );
};

SeasonList.propTypes = {
  seasons: PropTypes.array,
};

export default SeasonList;
