// import React from "react";
import ImageComponent from "@components/ImageComponent";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ActorInfo = ({ id, name, character, profilePath, episodeCount }) => {
  return (
    <Link to={`/people/${id}`} className="rounded-lg border border-slate-300 shadow-sm">
      <ImageComponent
        src={profilePath && `https://media.themoviedb.org/t/p/w276_and_h350_face/${profilePath}`}
        className="w-full rounded-lg"
        width={276}
        height={350}
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p className="text-[1.1vw]">{character}</p>
        <p>
          {episodeCount} {episodeCount > 1 ? "Episodes" : episodeCount === 1 ? "Episode" : ""}
        </p>
      </div>
    </Link>
  );
};

ActorInfo.propTypes = {
  id: PropTypes.any,
  name: PropTypes.any,
  character: PropTypes.any,
  profilePath: PropTypes.any,
  episodeCount: PropTypes.any,
};

export default ActorInfo;
