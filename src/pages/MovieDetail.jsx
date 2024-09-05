// import React from "react";

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../components/CircularProgressBar";

const MovieDetail = () => {
  return (
    <div className="relative overflow-hidden text-white">
      <img
        src="https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/NNC08YmJFFlLi1prBkK8quk3dp.jpg"
        className="absolute inset-0 brightness-[.2]"
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg" />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[1.8vw] font-bold">Test</p>
          <div className="flex items-center gap-8">
            <span className="border border-gray-400 p-1 text-gray-400">G</span>
            <p>2024-11-11</p>
            <p>Action & Adventure, Sci-Fi & Fantasy</p>
          </div>
          <div className="mt-4 flex items-center gap-12">
            <div className="flex items-center gap-2">
              <CircularProgressBar percent={90} size={3} strokeWidth={0.3} />
              Rating
            </div>
            <button>
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>
              Beginning in a time of relative peace, we follow a group of
              characters confronting the resurgence of evil in Middle-earth.
              From the darkest depths of the Misty Mountains, to the majestic
              forests of Lindon, to the breathtaking island kingdom of Númenor,
              to the furthest reaches of the map. Even in their demise, these
              kingdoms and characters leave lasting legacies.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div>
              <p className="font-bold">Director</p>
              <p>Jennifer Phang</p>
            </div>
            <div>
              <p className="font-bold">Writter</p>
              <p>Creator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
