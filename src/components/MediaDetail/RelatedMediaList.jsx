// import React from 'react'
import MediaCard from "@components/MediaCard";
import PropTypes from "prop-types";

const RelatedMediaList = ({ mediaList = [], title }) => {
  return (
    <div className="mt-8">
      <p className="mb-4 text-[1.6vw] font-bold">{title}</p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6">
        {mediaList.map((media) => (
          <MediaCard
            key={media.id}
            id={media.id}
            title={media.title || media.name}
            release_date={media.first_air_date || media.release_date}
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
  title: PropTypes.any,
};

export default RelatedMediaList;
