import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setError("Username and password cannot be empty.");
      return;
    }

    setError("");

    axios
      .post("http://localhost:4000/login", { username, password })
      .then((response) => {
        setMessage("Successfully Logged In!");
      })
      .catch((error) => {
        setError("Login failed. Please try again.");
      });
  };

  const handleRegister = () => {
    if (!username || !password) {
      setError("Username and password cannot be empty.");
      return;
    }

    setError("");

    axios
      .post("http://localhost:4000/adduser", { username, password })
      .then((response) => {
        setMessage("Successfully Registered!");
      })
      .catch((error) => {
        setError("Registration failed. Please try again.");
      });
  };

  return (
    <div className="app-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <button className="register-button" onClick={handleRegister}>
        Register
      </button>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default App;
