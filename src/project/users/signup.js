import React, { useState } from "react";
import * as client from "./client";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // [1
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.usersReducer);
  const signUp = async () => {
    try {
      const user = await client.signUp({ username, password });
      console.log(user.dob);
      navigate("/project/account");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      {currentUser && (
        <div className="container">
          <h1>Sign Up</h1>
          <p>
            You are signed in already. To sign up another account, please sign
            out first.
          </p>
        </div>
      )}
      {!currentUser && (
        <div className="container">
          <h1>Sign Up</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            value={username}
            className="form-control mb-2"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            className="form-control mb-2"
          />
          <button className="btn btn-success mb-2 me-2" onClick={signUp}>
            Sign Up
          </button>
        </div>
      )}
    </>
  );
}

export default SignUp;
