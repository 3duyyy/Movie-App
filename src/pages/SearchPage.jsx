import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import SearchForm from "@components/SearchForm";
import useFetch from "@hooks/useFetch";
import { useState } from "react";

const SearchPage = () => {
  const [searchFormValues, setSearchFormValues] = useState({
    mediaType: "movie",
    genres: [],
    rating: "All",
  });

  const [minRating, maxRating] =
    searchFormValues.rating === "All" ? [0, 100] : searchFormValues.rating.split("-");

  const { data } = useFetch({
    url: `/discover/${searchFormValues.mediaType}?with_genres=${searchFormValues.genres.join(",")}&vote_average.gte=${Math.round(minRating / 10)}&vote_average.lte=${Math.round(maxRating / 10)}`,
  });

  console.log({ data, searchFormValues });

  return (
    <div className="container flex-col">
      <p className="text-[2vw] font-bold">Search</p>
      <div className="flex gap-6">
        <div className="flex-1">
          <SearchForm setSearchFormValues={setSearchFormValues} />
        </div>
        <div className="flex-[3]">
          <RelatedMediaList mediaList={data.results || []} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
