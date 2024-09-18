// import React from "react";
import ImageComponent from "@components/ImageComponent";
import PropTypes from "prop-types";

const ActorInfo = ({ name, character, profilePath, episodeCount }) => {
  return (
    <div className="rounded-lg border border-slate-300 shadow-sm">
      <ImageComponent
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face/${profilePath}`
            : "/ActorNoImage.svg"
        }
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
    </div>
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
