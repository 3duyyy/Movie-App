// import React from "react";
import { useEffect } from "react";
import MediaCard from "./MediaCard";
import { useState } from "react";
import PropTypes from "prop-types";

const MediaList = ({ title, tabs }) => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

  useEffect(() => {
    const url = tabs.find((tab) => tab.id === activeTabId)?.url;

    if (url) {
      fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYThkNTMzZDEwZDhiZDJiNDg2ZTllY2JkZGZiM2VmNiIsIm5iZiI6MTcyNTM3ODQzNC44NDQ1NjgsInN1YiI6IjY2YzllYTdmYjg2N2EwYWVkZGZiOWU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DOp8iziLMf8M0kfZdMWe0jA8e_BWEcKHds-Dcz4iLTc",
        },
      }).then(async (res) => {
        const data = await res.json();
        const trendingMediaList = data.results.slice(0, 12);
        setMediaList(trendingMediaList);
      });
    }
  }, [activeTabId, tabs]);

  console.log(mediaList);

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex items-center gap-4 rounded border border-white">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer rounded px-3 py-1 ${tab.id === activeTabId ? "bg-white text-black" : ""}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
        {mediaList &&
          mediaList.map((media) => (
            <MediaCard
              key={media.id}
              title={media.title || media.name}
              release_date={media.release_date || media.first_air_date}
              poster={media.poster_path}
              point={Math.round(media.vote_average) * 10}
              mediaType={media.media_type || activeTabId}
            />
          ))}
      </div>
    </div>
  );
};

MediaList.propTypes = {
  title: PropTypes.any,
  tabs: PropTypes.any,
};

export default MediaList;
