// import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [relatedMovie, setRelatedMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRelatedMovieListLoading, setIsRelatedMovieListLoading] =
    useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYThkNTMzZDEwZDhiZDJiNDg2ZTllY2JkZGZiM2VmNiIsIm5iZiI6MTcyNTM3ODQzNC44NDQ1NjgsInN1YiI6IjY2YzllYTdmYjg2N2EwYWVkZGZiOWU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DOp8iziLMf8M0kfZdMWe0jA8e_BWEcKHds-Dcz4iLTc",
        },
      },
    )
      .then(async (res) => {
        const data = await res.json();
        setMovieInfo(data);
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, setMovieInfo]);

  console.log({ movieInfo });

  useEffect(() => {
    setIsRelatedMovieListLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYThkNTMzZDEwZDhiZDJiNDg2ZTllY2JkZGZiM2VmNiIsIm5iZiI6MTcyNTM3ODQzNC44NDQ1NjgsInN1YiI6IjY2YzllYTdmYjg2N2EwYWVkZGZiOWU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DOp8iziLMf8M0kfZdMWe0jA8e_BWEcKHds-Dcz4iLTc",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        const currentRelatedMovie = (data.results || []).slice(0, 12);
        setRelatedMovie(currentRelatedMovie);
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => {
        setIsRelatedMovieListLoading(false);
      });
  }, [id, setIsRelatedMovieListLoading]);

  if (isLoading || isRelatedMovieListLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RelatedMediaList mediaList={relatedMovie} />
          </div>
          <div className="flex-1">
            <p className="mb-4 text-[1.4vw] font-bold">Infomation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
