import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const employeeCredentials = {
      email: "employee@admin.com",
      password: "1234567"
    };

    if (
      credentials.email === employeeCredentials.email &&
      credentials.password === employeeCredentials.password
    ) {
      navigate("/employeeList");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-2xl mx-auto shadow border shadow-xl">
        <div className="px-8 py-8">
          <div className="text-3xl font-bold text-gray-600 mb-6 text-center mt-10">
            <h1>Login</h1>
          </div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col my-2">
              <label className="block text-gray-600 text-sm font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                className="h-10 w-50 border mt-2 px-2 py-2"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col my-4">
              <label className="block text-gray-600 text-sm font-bold">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="h-10 w-50 border mt-2 px-2 py-2"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex justify-center my-2">
              <button type="submit" className="rounded text-white font-semibold bg-blue-600 hover:bg-blue-500 py-2 px-6">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
