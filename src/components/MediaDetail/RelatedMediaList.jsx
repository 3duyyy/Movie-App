// import React from 'react'
import MediaCard from "@components/MediaCard";
import PropTypes from "prop-types";

const RelatedMediaList = ({ mediaList = [] }) => {
  return (
    <div className="mt-8">
      <p className="mb-4 text-[1.4vw] font-bold">More like this</p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6">
        {mediaList.map((media) => (
          <MediaCard
            key={media.id}
            id={media.id}
            title={media.title}
            release_date={media.release_date}
            poster={media.poster_path}
            point={Math.round(media.vote_average * 10)}
            mediaType={media.media_type}
          />
        ))}
      </div>
    </div>
  );
};

RelatedMediaList.propTypes = {
  mediaList: PropTypes.any,
};

export default RelatedMediaList;
