// import React from "react";
import PropTypes from "prop-types";
import ActorInfo from "./ActorInfo";
import { useState } from "react";

const ActorList = ({ actors = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const currentActors = isShowMore ? actors : actors.slice(0, 4);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6">
        {currentActors.map((actor) => (
          <ActorInfo
            key={actor.id}
            id={actor.id}
            name={actor.name}
            character={actor.character}
            profilePath={actor.profile_path}
          />
        ))}
      </div>
      <p
        className="mt-2 cursor-pointer text-slate-400"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show less" : "Show more"}
      </p>
    </div>
  );
};

ActorList.propTypes = {
  actors: PropTypes.array,
};

export default ActorList;
