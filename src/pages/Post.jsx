import React from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();

  // Function to handle click and navigate to profiles page
  const goToProfiles = () => {
    navigate("/profiles");
  };

  return (
    <div className="h-screen bg-blue-600 flex flex-col justify-center items-center text-center text-white">
      {/* Welcome Text */}
      <h1 className="text-4xl font-bold mb-6 text-white">Welcome to Facebook</h1>
      <p className="text-lg mb-8 text-white">The place to connect and share!</p>

      {/* Facebook Icon or Image */}
      <img
        className="w-24 h-24 mb-6"
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
        alt="Facebook Logo"
      />

      {/* Button to Navigate to Profiles Page */}
      <button
        onClick={goToProfiles}
        className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-200 transition-all"
      >
        Go to Profiles
      </button>

      {/* Additional Design Element */}
      <p className="mt-6 text-sm text-white">Stay connected with your friends and family.</p>
    </div>
  );
};

export default Post;
