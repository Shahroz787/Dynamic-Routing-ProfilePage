import React from "react";
import ProfileData from "../ProfileData"; 
import { Link } from "react-router-dom";

const Profiles = () => {


  return (
    <div className="w-full bg-[#000000e7] grid grid-cols-1 justify-between gap-[20px] p-[10px_20px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
  {ProfileData.map((data) => {
    return (
      <div key={data.id} className="w-full bg-white rounded-xl">
        <img
          className="h-56 object-cover w-full"
          src={data.background}
          alt=""
        />

        <img
          className="w-[110px] h-[110px] object-cover rounded-full ml-[37%] mt-[-60px] border-4 border-white shadow-[1px_1px_1px_1px_rgba(0,0,0,0.54)]"
          src={data.profileImage}
          alt=""
        />
        <div className="p-5 text-center w-full">
          <p className="text-2xl">{data.name}</p>
          <p className="text-stone-600 text-sm px-10 py-0 my-3">
            {data.profession}   
          </p>
          <p className="my-5 h-30 text-sm w-auto">{data.description}</p>
          <Link to={`/Profiles/${data.name}`}>
            <button className="py-[10px] px-[40px] mt-[10px] mb-[10px] text-white bg-[#3d7793] border-none shadow-[1px_1px_1px_1px_#fad503]" >
              View Profile
            </button>
          </Link>
        </div>
      </div>
    );
  })}
</div>

  );
};

export default Profiles;
