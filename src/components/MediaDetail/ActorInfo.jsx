// import React from "react";
import PropTypes from "prop-types";

const ActorInfo = ({ id, name, character, profilePath }) => {
  return (
    <div className="rounded-lg border border-slate-300 shadow-sm">
      <img
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face/${profilePath}`
            : "/ActorNoImage.svg"
        }
        className="w-full rounded-lg"
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p className="text-[1.1vw]">{character}</p>
        {/* <p>18</p> */}
      </div>
    </div>
  );
};

ActorInfo.propTypes = {
  id: PropTypes.any,
  name: PropTypes.any,
  character: PropTypes.any,
  profilePath: PropTypes.any,
};

export default ActorInfo;
