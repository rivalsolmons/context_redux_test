// src/components/BackButton.jsx
import React from "react";
import { useNavigate } from "react-router";

const Back = () => {
    const navigate = useNavigate(); // This hook works only within a <Router>.
  
    return (
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 ml-4 hover:bg-blue-600"
      >
        Back
      </button>
    );
  };

  export default Back;