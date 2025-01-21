import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-400 text-gray-800">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-600">Welcome to the Home Page</h1>
      <div className="p-8 bg-white shadow-lg rounded-lg text-center">
        <p className="mb-4 text-lg text-gray-600">Your gateway to our application</p>
        <div className="flex justify-center space-x-6">
          <Link to="/signup" className="px-6 py-3 bg-blue-500 text-white font-medium rounded shadow hover:bg-blue-600">
            Sign Up
          </Link>
          <Link to="/login" className="px-6 py-3 bg-blue-500 text-white font-medium rounded shadow hover:bg-blue-600">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
