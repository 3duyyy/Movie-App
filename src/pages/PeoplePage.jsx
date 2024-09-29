// import React from 'react'

import ImageComponent from "@components/ImageComponent";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import { GENDER_MAPPING } from "@libs/constant";
import { useLoaderData } from "react-router-dom";

const PeoplePage = () => {
  const PeopleInfo = useLoaderData();
  console.log({ PeopleInfo });

  return (
    <div className="bg-black text-[1.2vw] text-white">
      <div className="container">
        <div className="flex gap-6">
          <div className="flex-1">
            <ImageComponent
              src={
                PeopleInfo.profile_path &&
                `https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${PeopleInfo.profile_path}`
              }
              width={600}
              height={900}
              className="mb-6"
            />
            <div>
              <p className="mb-4 text-[1.4vw] font-bold">Personal Info</p>
              <div className="space-y-4">
                <div>
                  <p className="font-bold">Known For</p>
                  <p>{PeopleInfo.known_for_department}</p>
                </div>
                <div>
                  <p className="font-bold">Gender</p>
                  <p>{GENDER_MAPPING[PeopleInfo.gender]}</p>
                </div>
                <div>
                  <p className="font-bold">Place of Birth</p>
                  <p>{PeopleInfo.place_of_birth}</p>
                </div>
                <div>
                  <p className="font-bold">Birthday</p>
                  <p>{PeopleInfo.birthday}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[2]">
            <p className="mb-6 text-[2vw] font-bold">{PeopleInfo.name}</p>
            <div className="mb-6">
              <p className="mb-4 text-[1.4vw] font-bold">Biography</p>
              <p className="whitespace-pre-line">{PeopleInfo.biography}</p>
            </div>
            <RelatedMediaList
              mediaList={PeopleInfo.combined_credits?.cast || []}
              title="Know For"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
