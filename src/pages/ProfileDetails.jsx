import React from "react";
import { useParams } from "react-router";
import ProfileData from "../ProfileData";

const ProfileDetails = () => {
  const { name } = useParams();
  console.log(name);
  const currentProfile = ProfileData.find((data) => data.name === name);
  console.log(currentProfile);

  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        id="bg-img"
        src={currentProfile?.background}
        alt=""
      />
      {/* Content */}
      <div className="absolute z-10 max-w-[400px] w-full bg-white p-4 rounded-lg text-center">
        <div className="flex items-center space-x-4">
          {/* Profile Image */}
          <img
            className="w-20 h-20 rounded-full object-cover"
            src={currentProfile?.profileImage}
            alt={name}
          />
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="mt-[-2px] text-gray-700 text-xs tracking-widest">{currentProfile?.profession}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600">{currentProfile?.description}</p>
        <a
          href={currentProfile?.profileLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-blue-500"
        >
          View Profile
        </a>
      </div>
      {/* Overlay (optional, for better visibility of content over the background image) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
    </div>
  );
};

export default ProfileDetails;
