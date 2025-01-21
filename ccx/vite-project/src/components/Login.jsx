import React from "react";
import { useAuth } from "../App";
import { useNavigate } from "react-router";
import Back from "./Back";
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(formData.email, formData.password);
    if (success) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-blue-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-500">Login</h1>
      <form onSubmit={handleSubmit} className="w-96 bg-white p-6 rounded shadow-md">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Login
        </button><Back/>
      </form>
    </div>
  );
};

export default Login;
