import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
        username,
        password,
      });

      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token);
        setSuccessMessage("User created!");

        setTimeout(() => {
          navigate("/dashboard"); // redirect after showing message
        }, 1500);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {successMessage && (
        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
          {successMessage}
        </div>
      )}

      <form
        onSubmit={handleSignup}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8"
      >
        <h2 className="mb-4 text-xl font-bold">Sign Up</h2>
        <input
          className="mb-3 border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="mb-3 border rounded w-full py-2 px-3 text-gray-700"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
