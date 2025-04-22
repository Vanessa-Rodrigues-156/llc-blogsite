import React, { useState } from "react";
import Navigation from "../components/Navigation/Navigation";

const SignUp: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful signup
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
  };

  return (
    <div>
      <Navigation />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-16 rounded-md">
        <div className="bg-white p-8 rounded-3xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="rollNumber">
                Roll Number
              </label>
              <input
                type="text"
                id="rollNumber"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-orange-500 transition-colors"
              onClick={()=> window.location.href = "/"}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md">
          Signup successful!
        </div>
      )}
    </div>
  );
};

export default SignUp;
