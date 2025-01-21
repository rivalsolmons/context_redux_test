import React from "react";
import { useAuth } from "../App";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-500">Dashboard</h1>
      <p className="text-xl mb-6 text-blue-500">Welcome, {user.name}!</p>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
